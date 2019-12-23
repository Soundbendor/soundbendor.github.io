// Strings
export const NAVOUTLINE =
  "<div class=\"mdc-tab-bar\" role=\"tablist\">" +
    "<div class=\"mdc-tab-scroller\">" +
      "<div class=\"mdc-tab-scroller__scroll-area\">" +
        "<div class=\"mdc-tab-scroller__scroll-content\"></div>" +
      "</div>" +
    "</div>" +
  "</div>"
export const NAVOUTLINECLASS = ".mdc-tab-scroller__scroll-content"
export const NAVTABACTIVE = "\
  <span class=\"mdc-tab-indicator mdc-tab-indicator--active\">\
    <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\
  </span>\
"
export const NAVTABACTIVECLASS = "mdc-tab--active"
const NAVRIPPLE = "<span class=\"mdc-tab__ripple\"></span>"

// Functions
export function createIcon(iconName) {
  return ("<span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">" +
    iconName +
  "</span>")
}
export function createTab(elementContent, elementNumber, activeArray, icon = "") {
  const name = elementContent.title
  const tabID = name + elementNumber
  const activeClass = activeArray[0]
  const activeSpan = activeArray[1]
  console.log(activeArray)

  const tab = "<button class=\"mdc-tab" + activeClass + "\" role=\"tab\" aria-selected=\"true\" tabindex=\"" +
    elementNumber + "\">" +
      "<span class=\"mdc-tab__content\">" +
        icon +
        "<span class=\"mdc-tab__text-label\">" +
          name +
        "</span>" +
      "</span>" +
      activeSpan +
      NAVRIPPLE +
    "</button>"

  return tab
}
