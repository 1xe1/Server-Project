const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const verifyJWT = require('../middleware/verifyJWT')

// const {customersData} = require('../data/mockup')
// const Customer = require('../models/Customer')
// Customer.insertMany(customersData)


router
  .route(verifyJWT,'/') //verifyJWT,
  .get(verifyJWT,productController.getAllProducts)
  .post(verifyJWT,productController.createNewProduct)
  .patch(verifyJWT,productController.updateProduct)
  .delete(verifyJWT,productController.deleteProduct)

router.route('/:id').get(verifyJWT,productController.getAllProducts)

module.exports = router