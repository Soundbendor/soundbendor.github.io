import { addElement } from '../../utilities/addElement.js'

export function createPage(pagePath, isActive, pageId) {
  $.get(pagePath, function(data) {
    var page =
      "<div id=\"" + pageId + "\" class=\"" + isActive + "\">" +
        data +
      "</div>"

    addElement(page, "#main")
  })
}

export function updatePage(isActive, currentPageID) {
  $("#" + currentPageID).removeClass("none")
  $("#" + currentPageID).addClass(isActive)
}
