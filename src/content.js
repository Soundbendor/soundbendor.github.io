// Full object at bottom of doc with documentation
//             |
//             |
//             V

export const websiteContent = {
  websiteTitle: "SoundBendor",
  landingPageIndex: 0,
  navigation: [ "Tab", "Tabs", "Tabz" ],
  pages: [
    "./src/pages/landingPage/index.html",
    "./src/pages/secondPage/index.html",
    "./src/pages/thirdPage/index.html"
  ]
}

// Everything the content object can have
// {
//  websiteTitle: "Some string, should be short but descriptive for SEO"
//  landingPageIdex: An index (number) within the navigation, this used to determine what page is first seen
//  navigation: ["An array of strings", "Used to generate text on the tabs"]
//  pages: [
//    "An array of strings that represent paths to the page",
//    "Must match up with navigation array",
//    "Index 0 in navigation will go to index 0 of pages",
//    "the path must look like "./src/pages/{page file}/{index html}""
//  ]
// }
