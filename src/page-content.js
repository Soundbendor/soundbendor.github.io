import { addElement } from './utilities/addElement.js'
import { websiteContent } from './content.js'
import { isActive } from './utilities/isActive.js'

$(document).ready( function() {
  for (const page in body.elements) {
    var active = ""
    if (page == 0) {
      active = " is-active"
    }
    $("#body").append(" \
      <section class=\"mdl-layout__tab-panel" + active + "\" id=\"" + body.elements[page].id + "\"> \
        <div class=\"page-content\"><p>THINGS " + page + "</p></div> \
      </section> \
    ")
  }
})
