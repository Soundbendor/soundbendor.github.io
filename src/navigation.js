import { addElement } from './utilities/addElement.js'
import { websiteContent } from './content.js'
import { isActive } from './utilities/isActive.js'

function createTab(elementNumber, active) {
  var tabID = websiteContent.elements[elementNumber].id
  var name = websiteContent.elements[elementNumber].title

  var tab = "<a href=\"#" + tabID + "\" class=\"mdl-layout__tab" + active + "\">" + name + "</a>"
  return tab
}

for (const elementNumber in websiteContent.elements) {
  addElement(createTab(elementNumber, isActive(elementNumber, 0)), "#navigation")
}
