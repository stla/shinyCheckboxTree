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

sortNodes <- function(nodes){
  lapply(rlist::list.sort(nodes, `label`), function(node){
    if(is.element("children", names(node))){
      node[["children"]] <- sortNodes(node[["children"]])
    }
    node
  })
}

#' Create a checkbox tree
#'
#' @description This creates a checkbox tree in the Shiny UI.
#'
#' @param inputId the input slot that will be used to access the value
#' @param nodes a list of nodes; each node is a named list with the following
#' fields:
#' \describe{
#'   \item{\code{label}}{node label - required}
#'   \item{\code{value}}{the value associated to the node - required}
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
#' @param onlyLeafCheckboxes logical, whether checboxes should be shown only
#' for the leaves
#' @param showExpandAll logical; if \code{TRUE}, buttons for expanding and
#' collapsing all parent nodes will appear in the tree
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
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
        version = "1.0.0",
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
#      checked = checked,
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
updateCheckboxTreeInput <- function(session, inputId, checked){
  # configuration <- Filter(Negate(is.null), list(
  #   nodes = nodes,
  #   checkModel = checkModel,
  #   checked = checked,
  #   onlyLeafCheckboxes = onlyLeafCheckboxes,
  #   showExpandAll = showExpandAll
  # ))
  # configuration <- list(
  #   nodes = nodes,
  #   checkModel = checkModel,
  #   checked = checked,
  #   onlyLeafCheckboxes = onlyLeafCheckboxes,
  #   showExpandAll = showExpandAll
  # )
  # value <- checked
  # if(length(configuration)){
  #   session$sendInputMessage(inputId, list(
  #     value = value))
  # }
  stopifnot(isValidCheckedList(checked))
  session$sendInputMessage(inputId, list(value = unique(checked)))
}
