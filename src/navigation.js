body = {
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

function update(page, active = "") {
  var nav

  $("#navigation").append("<a href=\"#" + body.elements[page].id + "\" class=\"mdl-layout__tab" + active + "\">" + body.elements[page].title + "</a>")
  console.log($("#navigation").get()[0])
  componentHandler.upgradeElement($("#navigation").get()[0])
}

for (const page in body.elements) {
  active = ""
  if (page == 0) {
    active = " is-active"
  }
  update(page, active)
}
