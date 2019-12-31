import { NAVTABACTIVECLASS, NAVTABELEMENTACTIVECLASS, createTabActive } from '../containers/navigation/elements.js'

export function isActive(elementNumber, activeNumber) {
  const activeArray = [" " + NAVTABACTIVECLASS, " " + NAVTABELEMENTACTIVECLASS]
  switch (parseInt(elementNumber)) {
    case activeNumber:
      return activeArray
    default:
      return ["", ""]
  }
}
