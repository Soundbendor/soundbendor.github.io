import { generateNavigation } from './components/navigation.js'
import { generatePageContent } from './components/page-content.js'

export function generateWebsite(websiteContent) {
  generateNavigation()
  generatePageContent()
}
