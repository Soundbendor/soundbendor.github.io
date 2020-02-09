import {
  createMainLayout,
  createCardColumn,
  createCard
} from './elements.js'
import { addElement } from '../../utilities/addElement.js'

export function initializePage(isActive, pageId, cardPageId) {
  var page =
    "<div id=\"" + pageId + "\" class=\"" + isActive + "\">" +
      createMainLayout(cardPageId) +
    "</div>"

  addElement(page, "#main")
}

export function initializeColumn(columnAmount, cardPageId) {

    console.log(cardPageId)
  for (var i = 1; i <= columnAmount; i++) {
    addElement(
      createCardColumn(
        cardPageId,
        i
      ),
      "#" + cardPageId
    )
  }
}

export function initializeCards(cards, columnAmount, cardPageId) {
  var columnIndex = 1

  cards.forEach(card => {
    if (columnIndex == 4) {
      columnIndex = 1
    }
    const cardElement = createCard(card)
    const columnID = "#" + cardPageId + "column-" + columnIndex
    addElement(cardElement, columnID)
    columnIndex++
  })
}
