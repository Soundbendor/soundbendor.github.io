import { initializeTitle } from './meta-data.js'

export function generateMetaData(metaData) {
  const title = metaData.title

  initializeTitle(title)
}
