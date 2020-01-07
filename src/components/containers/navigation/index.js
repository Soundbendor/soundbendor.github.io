import { initializeNav, initializeNavElements } from './navigation.js'
// import { addElement } from './utilities/addElement.js'
// import { isActive } from './utilities/isActive.js'

export function generateNavigation(navContent) {
  const landingPageIndex = navContent.landingPageIndex
  const elements = navContent.elements

  initializeNav()
  initializeNavElements(elements, landingPageIndex)
}
