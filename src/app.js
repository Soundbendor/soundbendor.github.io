import { generateNavigation } from './components/containers/navigation/index.js'
import { generatePageContent } from './components/containers/page-content/index.js'
import { generateScripts } from './components/containers/scripts/index.js'
import { generateMetaData } from './components/containers/meta-data/index.js'

export function generateWebsite(websiteContent) {
  const headerData = {
    title: websiteContent.websiteTitle
  }
  const landingPageIndex = websiteContent.landingPageIndex
  const navigation = websiteContent.navigation
  const pages = websiteContent.pages

  generateMetaData(headerData)
  generateNavigation(navigation, landingPageIndex)
  generatePageContent(pages, landingPageIndex)
  generateScripts()
}
