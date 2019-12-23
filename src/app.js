import { generateNavigation } from './components/containers/navigation/index.js'
import { generatePageContent } from './components/containers/page-content/index.js'

export function generateWebsite(websiteContent) {
  generateNavigation(websiteContent)
  generatePageContent()
}
