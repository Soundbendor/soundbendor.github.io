import { generateNavigation } from './components/containers/navigation/index.js'
import { generatePageContent } from './components/containers/page-content/index.js'
import { initializeScripts } from './components/containers/scripts/index.js'
import { generateMetaData } from './components/containers/meta-data/index.js'

export function generateWebsite(websiteContent) {
  const metaData = {
    title: websiteContent.websiteTitle
  }
  const landingPageIndex = websiteContent.landingPageIndex
  const navigation = websiteContent.navigation
  const pages = websiteContent.pages

  generateMetaData(metaData)
  generateNavigation(navigation, landingPageIndex)
  generatePageContent(pages, landingPageIndex)
  initializeScripts()
}
