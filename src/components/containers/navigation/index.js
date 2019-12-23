import { initializeNav, initializeNavElements } from './navigation.js'
// import { addElement } from './utilities/addElement.js'
// import { isActive } from './utilities/isActive.js'

export function generateNavigation(navContent) {
  const elements = navContent.elements

  initializeNav()
  initializeNavElements(elements)
  // for (const elementNumber in websiteContent.elements) {
  //   addElement(createTab(elementNumber, isActive(elementNumber, 0)), "#navigation-main")
  // }
}
