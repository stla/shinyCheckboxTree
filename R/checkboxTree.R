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

#' <Add Title>
#'
#' <Add Description>
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
checkboxTreeInput <- function(inputId,
                              nodes,
                              sort = FALSE,
                              checkModel = "leaf",
                              checked = list(),
                              onlyLeafCheckboxes = FALSE,
                              showExpandAll = FALSE) {
  # TODO: setValue(configuration.checked)
  stopifnot(isValidNodeList(nodes))
  if(sort) nodes <- sortNodes(nodes)
  values <- extractValues(nodes)
  if(anyDuplicated(values)){
    stop("There are duplicated values in the `nodes` list.", .call = TRUE)
  }
  checkModel <- match.arg(checkModel, c("leaf", "all"))
  stopifnot(isValidCheckedList(checked))
  checked <- intersect(checked, as.list(values))
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
      checkModel = checkModel,
#      checked = checked,
      onlyLeafCheckboxes = onlyLeafCheckboxes,
      showExpandAll = showExpandAll
    ),
    container = htmltools::tags$div
  )
}

#' <Add Title>
#'
#' <Add Description>
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
