import { generateNavigation } from './components/containers/navigation/index.js'
import { generatePageContent } from './components/containers/page-content/index.js'
import { initializeScripts } from './components/containers/scripts/index.js'

export function generateWebsite(websiteContent) {
  const navigation = websiteContent.navigation
  const pages = websiteContent.pages
  const landingPageIndex = websiteContent.landingPageIndex

  generateNavigation(navigation, landingPageIndex)
  generatePageContent(pages, landingPageIndex)
  initializeScripts()
}
