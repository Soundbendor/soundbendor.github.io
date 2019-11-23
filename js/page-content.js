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
    $("#body").append(" \
      <section class=\"mdl-layout__tab-panel\" id=\"" + body.elements[page].id + "\"> \
        <div class=\"page-content\"><p>THINGS " + page + "</p></div> \
      </section> \
    ")
  }
})
