const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')
const verifyJWT = require('../middleware/verifyJWT')

router
  .route('/') //verifyJWT,
  .get(customerController.getAllCustomers)
  .post(customerController.createNewCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer)

router.route('/:id').get(customerController.getAllCustomers)

module.exports = router
