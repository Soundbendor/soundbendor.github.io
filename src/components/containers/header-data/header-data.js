import { preAddElement as addElement } from '../../utilities/addElement.js'

export function initializeTitle(title) {
  const titleElement = "<title>" + title + "</title>"

  addElement(titleElement, "head")
}
export function initializeDesc(desc) {
  const descElement = "<meta name=\"description\" content=\"" + desc + "\">"

  addElement(descElement, "head")
}
