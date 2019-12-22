import { initializeNavigation } from './navigation.js'
import { initializePageContent } from './page-content.js'

$(document).ready(function() {
    const nav = initializeNavigation()
    const pages = initializePageContent()
    console.log(componentHandler)
    componentHandler.upgradeDom()
})
