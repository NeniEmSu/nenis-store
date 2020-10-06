const express = require('express')
const router = express.Router()

const productsCtrl = require('../controllers/productsController');

router.get('/products', productsCtrl.getProducts)

router.get('/product/:id', productsCtrl.getSingeProduct)

module.exports = router