import {
  initializePage,
  initializeColumn,
  initializeCards
} from './card-page.js'

export function generateCardPage(pageObject, isActive, pageId, cardPageId) {
  const columnAmount = pageObject.columnAmount
  const cards = pageObject.cards

  initializePage(isActive, pageId, cardPageId)
  initializeColumn(columnAmount, cardPageId)
  initializeCards(cards, columnAmount, cardPageId)
}
