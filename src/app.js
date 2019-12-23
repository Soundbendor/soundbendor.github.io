import { initializeNavigation } from './components/navigation.js'
import { initializePageContent } from './components/page-content.js'

export function generateWebsite() {
  initializeNavigation()
  initializePageContent()
}
