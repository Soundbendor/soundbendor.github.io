import { addElement } from '../../utilities/addElement.js'
import { isActivePage as isActive } from '../../utilities/isActive.js'
import { createPage, updatePage } from './elements.js'

export function generatePageContent(pages, landingPageIndex) {
  const nav = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'))
  var pageIds = []

  nav.listen('MDCTab:interacted', function (event) {
    const pageId = event.detail.tabId
    const pageIndex = parseInt(pageId.split("-")[2])

    for (const idNumber in pageIds) {
      updatePage(isActive(parseInt(idNumber) + 1, pageIndex), pageIds[idNumber])
    }
  })

  for (const pageNumber in pages) {
    const pagePath = pages[pageNumber]
    const pageId = "page-mdc-tab-" + (parseInt(pageNumber) + 1)
    pageIds.push(pageId)

    createPage(pagePath, isActive(pageNumber, landingPageIndex), pageId)
  }
}
