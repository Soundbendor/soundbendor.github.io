import { addElement } from '../../utilities/addElement.js'
import {
  NAVOUTLINE,
  NAVOUTLINECLASS,
  createTab
} from './elements.js'
import { isActive } from '../../utilities/isActive.js'

export function initializeNav() {
  $("#main").append(NAVOUTLINE)
}

export function initializeNavElements(elements) {
  for (const elementNumber in elements) {
    addElement(
      createTab(
        elements[elementNumber],
        elementNumber,
        isActive(elementNumber, 0)
      ),
      NAVOUTLINECLASS
    )
  }
}
