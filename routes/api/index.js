const express = require('express')
const router = express.Router()
const requireDirectory = require('require-directory')
const routes = requireDirectory(module)

for (const key in routes) {
  router.use('/' + key, routes[key])
}

module.exports = router
