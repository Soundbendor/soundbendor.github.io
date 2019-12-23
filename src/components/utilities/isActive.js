import { NAVTABACTIVECLASS, NAVTABACTIVE } from '../containers/navigation/elements.js'

export function isActive(elementNumber, activeNumber) {
  const activeArray = [" " + NAVTABACTIVECLASS, NAVTABACTIVE]
  switch (parseInt(elementNumber)) {
    case activeNumber:
      return activeArray
    default:
      return ["", ""]
  }
}
