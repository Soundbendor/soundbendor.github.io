export function addElement(element, parent) {
  $(parent).append(element)
  // upgrade($(parent).get()[0])
}

function upgrade(parent) {
  componentHandler.upgradeElement($(parent).get()[0])
}
