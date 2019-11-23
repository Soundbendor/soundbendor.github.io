import { addElement } from './utilities/addElement.js'
import { websiteContent } from './content.js'


function createTab(elementNumber, active) {
  var tabID = websiteContent.elements[elementNumber].id
  var name = websiteContent.elements[elementNumber].title

  var tab = "<a href=\"#" + tabID + "\" class=\"mdl-layout__tab" + active + "\">" + name + "</a>"
  return tab
}

for (const elementNumber in websiteContent.elements) {
  var active = ""
  if (elementNumber == 0) {
    active = " is-active"
  }
  addElement(createTab(elementNumber, active), "#navigation")
}
