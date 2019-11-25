export function addElement(element, parent) {
  $(parent).append(element)
  upgrade($(parent).get()[0])
}

function upgrade(parent) {
  var ThisNeedsToBeHereToWorkDontAsk
  componentHandler.upgradeElement($(parent).get()[0])
}
