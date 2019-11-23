// var content = $("content.json").get()
// content = JSON.parse(content)

import { addElement } from './utilities/addElement.js';

var content = {
   elements: [
    {
      title: "Tab",
      id: "fixed-tab-1"
    },
    {
      title: "Tabs",
      id: "fixed-tab-2"
    },
    {
      title: "Tabz",
      id: "fixed-tab-3"
    }
  ]
}

function createTab(elementNumber, active) {
  var tabID = body.elements[elementNumber].id
  var name = body.elements[elementNumber].title

  var tab = "<a href=\"#" + tabID + "\" class=\"mdl-layout__tab" + active + "\">" + name + "</a>"
  return tab
}

for (const elementNumber in content.elements) {
  var active = ""
  if (elementNumber == 0) {
    active = " is-active"
  }
  addElement(createTab(elementNumber, active), "#navigation")
}
