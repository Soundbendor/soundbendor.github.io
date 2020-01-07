import { NAVTABACTIVECLASS, NAVTABELEMENTACTIVECLASS } from '../containers/navigation/elements.js'

export function isActive(elementNumber, activeNumber) {
  const activeArray = [" " + NAVTABACTIVECLASS, " " + NAVTABELEMENTACTIVECLASS]
  switch (parseInt(elementNumber)) {
    case activeNumber:
      return activeArray
    default:
      return ["", ""]
  }
}
