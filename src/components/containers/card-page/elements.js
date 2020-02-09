export function createMainLayout(pageId) {
  return "<div class='mdc-layout-grid'>" +
    "<div id='" + pageId + "' class='mdc-layout-grid__inner'></div>"
  "</div>"
}

export function createCardColumn(pageId, columnAmount) {
  return "<div id='" + pageId + "column-" + columnAmount + "' class='mdc-layout-grid__cell'>"
}

export function createCard(card) {
  const picture = card.picture ? "background-image: url(&quot;" + card.picture + "&quot;)" : ""
  const titleOne = card.picture ? "<h2 class='demo-card__title mdc-typography mdc-typography--headline6'>" + card.titleOne + "</h2>" : ""
  const titleTwo = card.picture ? "<h3 class='demo-card__subtitle mdc-typography mdc-typography--subtitle2'>" + card.titleTwo + "</h3>" : ""

  const htmlCard = "<div class='mdc-card demo-card size'>" +
      "<div class='mdc-card__primary-action demo-card__primary-action' tabindex='0'>" +
          "<div class='mdc-card__media mdc-card__media--16-9 demo-card__media' style='" + picture + "'></div>" +
          "<div class='demo-card__primary'>" +
             titleOne +
             titleTwo +
          "</div>" +
          "<div class='demo-card__secondary mdc-typography mdc-typography--body2'>" + card.mainText + "</div>" +
      "</div>" +
    "</div>"

  return htmlCard
}

// <div class="mdc-card demo-card size">
//   <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
//     <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div>
//     <div class="demo-card__primary">
//       <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
//       <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>
//     </div>
//     <div class="demo-card__secondary mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today. Visit ten places on our planet that are undergoing the biggest changes today.</div>
//   </div>
// </div>
