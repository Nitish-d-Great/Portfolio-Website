
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/nitish/Desktop/Portfolio Website/Nitish/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/nitish/Desktop/Portfolio Website/Nitish/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/nitish/Desktop/Portfolio Website/Nitish/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nitish/Desktop/Portfolio Website/Nitish/src/pages/index.js")),
  "component---src-pages-utilities-js": preferDefault(require("/Users/nitish/Desktop/Portfolio Website/Nitish/src/pages/utilities.js"))
}

