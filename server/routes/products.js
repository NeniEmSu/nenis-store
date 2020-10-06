const express = require('express')
const router = express.Router()

router.get('/products', (req, res, next) => {
  res.json({
    message: "response from the router folder"
  })
})

module.exports = router