import { addElement } from './utilities/addElement.js'
import { websiteContent } from './content.js'
import { isActive } from './utilities/isActive.js'

function createPage(pageNumber, active) {
  var pageID = websiteContent.elements[pageNumber].id
  var page

  page = "<section class=\"mdl-layout__tab-panel" + active + "\" id=\"" + pageID + "\">"
  page += "<div class=\"page-content\"><p>THINGS " + pageNumber + "</p></div>"
  page += "</section>"

  return page
}

for (const pageNumber in websiteContent.elements) {
  addElement(createPage(pageNumber, isActive(pageNumber, 0)), "#body")
}
