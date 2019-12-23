import { addElement } from './utilities/addElement.js'
import { websiteContent } from './content.js'
import { isActive } from './utilities/isActive.js'
// import { loadHTML } from './utilities/loadHTML.js'

function createPage(pageNumber, active, pageContent) {
  var pageID = websiteContent.elements[pageNumber].id
  var page

  page = "<section class=\"mdl-layout__tab-panel" + active + "\" id=\"" + pageID + "\">"
  page += pageContent
  page += "</section>"

  return page
}

export function initializePageContent() {
  for (const pageNumber in websiteContent.elements) {
    var pageContent = websiteContent.elements[pageNumber].page

    $.get(pageContent, function(data) {
      addElement(createPage(pageNumber, isActive(pageNumber, 0), data), "#body-main")
    })
  }
}
