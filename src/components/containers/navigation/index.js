import { initializeNav, initializeNavElements } from './navigation.js'
// import { addElement } from './utilities/addElement.js'
// import { isActive } from './utilities/isActive.js'

function createTab(elementNumber, active) {
  var tabID = websiteContent.elements[elementNumber].id
  var name = websiteContent.elements[elementNumber].title

  var tab = "<a href=\"#" + tabID + "\" class=\"mdl-layout__tab" + active + "\">" + name + "</a>"
  return tab
}

export function generateNavigation() {
  initializeNav()
  initializeNavElements()
  // for (const elementNumber in websiteContent.elements) {
  //   addElement(createTab(elementNumber, isActive(elementNumber, 0)), "#navigation-main")
  // }
}
