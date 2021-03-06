% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/checkboxTree.R
\name{updateCheckboxTreeInput}
\alias{updateCheckboxTreeInput}
\title{Update a checkbox tree}
\usage{
updateCheckboxTreeInput(session, inputId, checked)
}
\arguments{
\item{session}{the Shiny \code{session} object}

\item{inputId}{the id of the checkbox tree to update}

\item{checked}{a list of selected nodes identified by their value}
}
\description{
Update the selected nodes of a checkbox tree.
}
\examples{
if(interactive()) {

library(shiny)
library(shinyCheckboxTree)

treedata <- list(
  list(
    value = "A",
    label = "Node A",
    title = "Hello, I am node A",
    children = list(
      list(
        value = "Aa",
        label = "Subnode Aa",
        title = "I'm node Aa, a child of node A"
      ),
      list(
        value = "Ab",
        label = "Subnode Ab",
        title = "I'm node Ab, you can't select me since I have no checkbox",
        showCheckbox = FALSE,
        children = list(
          list(
            value = "Ab1",
            label = "Subsubnode Ab1",
            title = "I'm node Ab1, a child of node Ab, and I have no child"
          ),
          list(
            value = "Ab2",
            label = "Subsubnode Ab2",
            title = "I'm node Ab2, I'm red thanks to my CSS class",
            className = "redNode"
          )
        )
      )
    )
  ),
  list(
    value = "B",
    label = "Node B",
    title = "I am node B, I am disabled (so my child is disabled as well)",
    disabled = TRUE,
    children = list(
      list(
        value = "Ba",
        label = "Subnode Ba",
        title = "I'm disabled but you can select me with the 'Update' button"
      )
    )
  )
)

ui <- fluidPage(
  tags$head(
    tags$style(HTML(".redNode { color: red; }"))
  ),
  br(),
  fluidRow(
    column(
      width = 6,
      checkboxTreeInput("tree", nodes = treedata, checked = list("Ab1"),
                        showExpandAll = TRUE)
    ),
    column(
      width = 6,
      tags$fieldset(
        tags$legend("Selected leaves:"),
        verbatimTextOutput("checkedLeaves")
      )
    )
  ),
  br(),
  actionButton("update", "Update checkbox tree", class = "btn-warning")
)

server <- function(input, output, session) {
  output[["checkedLeaves"]] <- renderPrint({
    input[["tree"]]
  })
  observeEvent(input[["update"]], {
    updateCheckboxTreeInput(session, "tree",
                            checked = list("Aa", "Ab2", "Ba"))
  })
}

shinyApp(ui, server)

}
}
