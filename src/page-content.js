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

$(document).ready( function() {
  for (const page in body.elements) {
    active = ""
    if (page == 0) {
      active = "is-active"
    }
    $("#body").append(" \
      <section class=\"mdl-layout__tab-panel " + active + "\" id=\"" + body.elements[page].id + "\"> \
        <div class=\"page-content\"><p>THINGS " + page + "</p></div> \
      </section> \
    ")
  }
})
