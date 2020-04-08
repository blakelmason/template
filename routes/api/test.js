const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  console.log(req.headers.authorization)
  res.send('test guuuud')
})

module.exports = router
