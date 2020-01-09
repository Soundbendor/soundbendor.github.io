import { addElement } from '../../utilities/addElement.js'

export function initializeTitle(title) {
  const titleElement = "<title>" + title + "</title>"

  addElement(titleElement, "head")
}
