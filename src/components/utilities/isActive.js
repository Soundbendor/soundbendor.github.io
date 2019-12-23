export function isActive(elementNumber, activeNumber) {
  var active

  if (elementNumber == activeNumber) {
    active = " is-active"
  } else {
    active = ""
  }

  return active
}
