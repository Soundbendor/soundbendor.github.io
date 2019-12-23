export async function loadHTML(pageContent) {
  return await new Promise(function(resolve) {
    $.get(pageContent, function(data) {
      resolve(data)
    })
  })
}
