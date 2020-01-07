import { initializeNav, initializeNavElements } from './navigation.js'
// import { addElement } from './utilities/addElement.js'
// import { isActive } from './utilities/isActive.js'

export function generateNavigation(elements, landingPageIndex) {
  initializeNav()
  initializeNavElements(elements, landingPageIndex)
}
