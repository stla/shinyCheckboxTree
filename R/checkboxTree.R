isValidNode <- function(node){
  valid <- TRUE
  if(!is.list(node) ||
     !all(is.element(c("value", "label"), names(node))) ||
     !(is.atomic(node[["value"]]) && length(node[["value"]]) == 1L) ||
     !(is.atomic(node[["label"]]) && length(node[["label"]]) == 1L)){
    return(FALSE)
  }
  if(is.element("children", names(node))){
    children <- node[["children"]]
    valid <- is.list(children) && (nchildren <- length(children))
    i <- 1L
    while(valid && i <= nchildren){
      valid <- isValidNode(children[[i]])
      i <- i + 1L
    }
  }
  valid
}

isValidNodeList <- function(nodes){
  valid <- is.list(nodes) && (nnodes <- length(nodes))
  i <- 1L
  while(valid && i <= nnodes){
    valid <- isValidNode(nodes[[i]])
    i <- i + 1L
  }
  valid
}

extractValues <- function(nodes){
  values <- sapply(nodes, "[[", "value")
  sapply(nodes, function(node){
    if(is.element("children", names(node))){
      values <<- c(values, extractValues(node[["children"]]))
    }
  })
  values
}

extractLeavesValues <- function(nodes){
  values <- NULL
  sapply(nodes, function(node){
    if(!is.element("children", names(node))){
      values <<- c(values, node[["value"]])
    }
  })
  sapply(nodes, function(node){
    if(is.element("children", names(node))){
      values <<- c(values, extractLeavesValues(node[["children"]]))
    }
  })
  values
}


isValidCheckedList <- function(checked){
  valid <- is.list(checked) && length(names(checked)) == 0L
  if(valid && length(checked)){
    valid <- all(sapply(checked, function(value){
      is.atomic(value) && length(value) == 1L
    }))
  }
  valid
}

#' @importFrom rlist list.sort
#' @noRd
sortNodes <- function(nodes){
  lapply(rlist::list.sort(nodes, `label`), function(node){
    if(is.element("children", names(node))){
      node[["children"]] <- sortNodes(node[["children"]])
    }
    node
  })
}

#' Checkbox tree
#'
#' @description This creates a checkbox tree in the Shiny UI.
#'
#' @param inputId the input slot that will be used to access the value
#' @param nodes a list of nodes; each node is a named list with the following
#' fields:
#' \describe{
#'   \item{\code{label}}{node label - \emph{required}}
#'   \item{\code{value}}{the value associated to the node - \emph{required}}
#'   \item{\code{children}}{the children of the node, i.e. a list of nodes}
#'   \item{\code{className}}{a class name to add to the node}
#'   \item{\code{disabled}}{logical, whether to disable the node}
#'   \item{\code{showCheckbox}}{logical, whether the node should show a checkbox}
#'   \item{\code{title}}{a custom \code{title} attribute for the node}
#' }
#' @param sort logical, whether to sort the nodes by their label
#' @param single logical; if \code{TRUE}, only one node can be selected
#' @param checkModel \code{"leaf"} or \code{"all"}, specifies which checked
#' nodes should be included in the value
#' @param checked a list of initially checked nodes, identified by their value
#' @param onlyLeafCheckboxes logical, whether checkboxes should be shown only
#' for the leaves
#' @param showExpandAll logical; if \code{TRUE}, buttons for expanding and
#' collapsing all parent nodes will appear in the widget
#'
#' @seealso \code{\link{updateCheckboxTreeInput}}
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#' @export
#'
#' @examples if(interactive()) {
#'
#' # make the nodes list from a vector of file paths
#' makeNodes <- function(leaves){
#'   dfs <- lapply(strsplit(leaves, "/"), function(s){
#'     item <-
#'       Reduce(function(a,b) paste0(a,"/",b), s[-1], s[1], accumulate = TRUE)
#'     data.frame(
#'       item = item,
#'       parent = c("root", item[-length(item)]),
#'       stringsAsFactors = FALSE
#'     )
#'   })
#'   dat <- dfs[[1]]
#'   for(i in 2:length(dfs)){
#'     dat <- merge(dat, dfs[[i]], all = TRUE)
#'   }
#'   f <- function(parent){
#'     i <- match(parent, dat$item)
#'     item <- dat$item[i]
#'     children <- dat$item[dat$parent==item]
#'     label <- tail(strsplit(item, "/")[[1]], 1)
#'     if(length(children)){
#'       list(
#'         label = label,
#'         value = item,
#'         children = lapply(children, f)
#'       )
#'     }else{
#'       list(label = label, value = item)
#'     }
#'   }
#'   lapply(dat$item[dat$parent == "root"], f)
#' }
#'
#' folder <-
#'   list.files(system.file("www", "shared", package = "shiny"), recursive = TRUE)
#' nodes <- makeNodes(folder)
#'
#'
#' library(shiny)
#' library(shinyCheckboxTree)
#'
#' ui <- fluidPage(
#'   tags$head(
#'     tags$style(HTML(".react-checkbox-tree { font-size: 13px; }"))
#'   ),
#'   br(),
#'   fluidRow(
#'     column(
#'       6,
#'       checkboxTreeInput("tree", nodes = nodes)
#'     ),
#'     column(
#'       6,
#'       verbatimTextOutput("checked")
#'     )
#'   )
#' )
#'
#' server <- function(input, output, session) {
#'   output[["checked"]] <- renderPrint({
#'     cat(input[["tree"]], sep = "\n")
#'   })
#' }
#'
#' shinyApp(ui, server)
#'
#' }
checkboxTreeInput <- function(inputId,
                              nodes,
                              sort = FALSE,
                              single = FALSE,
                              checkModel = "leaf",
                              checked = list(),
                              onlyLeafCheckboxes = FALSE,
                              showExpandAll = FALSE) {
  stopifnot(isValidNodeList(nodes))
  stopifnot(is.logical(sort))
  if(sort) nodes <- sortNodes(nodes)
  stopifnot(is.logical(single))
  values <- if(single) extractLeavesValues(nodes) else extractValues(nodes)
  if(anyDuplicated(values)){
    stop("There are duplicated values in the `nodes` list.", .call = TRUE)
  }
  checkModel <- match.arg(checkModel, c("leaf", "all"))
  stopifnot(isValidCheckedList(checked))
  checked <- intersect(checked, as.list(values))
  if(single && length(checked) > 1){
    stop("The `checked` list contains more than one element while `single=TRUE`",
         .call = TRUE)
  }
  stopifnot(is.logical(onlyLeafCheckboxes))
  stopifnot(is.logical(showExpandAll))
  reactR::createReactShinyInput(
    inputId,
    "checkboxTree",
    list(
      htmltools::htmlDependency(
        name = "checkboxTree-input",
        version = "0.1.0",
        src = "www/shinyCheckboxTree/checkboxTree",
        package = "shinyCheckboxTree",
        script = "checkboxTree.js",
        stylesheet = "react-checkbox-tree.css"
      ),
      htmltools::htmlDependency(
        name = "font-awesome",
        version = "5.13.0",
        src = "www/shared/fontawesome",
        package = "shiny",
        stylesheet = c(
          "css/all.min.css",
          "css/v4-shims.min.css"
        )
      )
    ),
    default = checked,
    configuration = list(
      nodes = nodes,
      values = values,
      single = single,
      checkModel = checkModel,
      onlyLeafCheckboxes = single || onlyLeafCheckboxes,
      showExpandAll = showExpandAll
    ),
    container = htmltools::tags$div
  )
}

#' Update a checkbox tree
#'
#' @description Update the selected nodes of a checkbox tree.
#'
#' @param session the Shiny \code{session} object
#' @param inputId the id of the checkbox tree to update
#' @param checked a list of selected nodes identified by their value
#'
#' @export
#' @examples if(interactive()) {
#'
#' library(shiny)
#' library(shinyCheckboxTree)
#'
#' treedata <- list(
#'   list(
#'     value = "A",
#'     label = "Node A",
#'     title = "Hello, I am node A",
#'     children = list(
#'       list(
#'         value = "Aa",
#'         label = "Subnode Aa",
#'         title = "I'm node Aa, a child of node A"
#'       ),
#'       list(
#'         value = "Ab",
#'         label = "Subnode Ab",
#'         title = "I'm node Ab, you can't select me since I have no checkbox",
#'         showCheckbox = FALSE,
#'         children = list(
#'           list(
#'             value = "Ab1",
#'             label = "Subsubnode Ab1",
#'             title = "I'm node Ab1, a child of node Ab, and I have no child"
#'           ),
#'           list(
#'             value = "Ab2",
#'             label = "Subsubnode Ab2",
#'             title = "I'm node Ab2, I'm red thanks to my CSS class",
#'             className = "redNode"
#'           )
#'         )
#'       )
#'     )
#'   ),
#'   list(
#'     value = "B",
#'     label = "Node B",
#'     title = "I am node B, I am disabled (so my child is disabled as well)",
#'     disabled = TRUE,
#'     children = list(
#'       list(
#'         value = "Ba",
#'         label = "Subnode Ba",
#'         title = "I'm disabled but you can select me with the 'Update' button"
#'       )
#'     )
#'   )
#' )
#'
#' ui <- fluidPage(
#'   tags$head(
#'     tags$style(HTML(".redNode { color: red; }"))
#'   ),
#'   br(),
#'   fluidRow(
#'     column(
#'       width = 6,
#'       checkboxTreeInput("tree", nodes = treedata, checked = list("Ab1"),
#'                         showExpandAll = TRUE)
#'     ),
#'     column(
#'       width = 6,
#'       tags$fieldset(
#'         tags$legend("Selected leaves:"),
#'         verbatimTextOutput("checkedLeaves")
#'       )
#'     )
#'   ),
#'   br(),
#'   actionButton("update", "Update checkbox tree", class = "btn-warning")
#' )
#'
#' server <- function(input, output, session) {
#'   output[["checkedLeaves"]] <- renderPrint({
#'     input[["tree"]]
#'   })
#'   observeEvent(input[["update"]], {
#'     updateCheckboxTreeInput(session, "tree",
#'                             checked = list("Aa", "Ab2", "Ba"))
#'   })
#' }
#'
#' shinyApp(ui, server)
#'
#' }
updateCheckboxTreeInput <- function(session, inputId, checked){
  stopifnot(isValidCheckedList(checked))
  session$sendInputMessage(inputId, list(value = unique(as.list(checked))))
}
