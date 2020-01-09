import { initializeTitle, initializeDesc } from './header-data.js'

export function generateHeaderData(headerData) {
  const title = headerData.title
  const desc = headerData.desc

  initializeDesc(desc)
  initializeTitle(title)
}
