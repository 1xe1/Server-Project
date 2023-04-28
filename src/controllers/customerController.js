const Customer = require('../models/Customer')

/**
 * @desc Get all customer
 * @route GET /customer
 * @access Private
 */
const getAllCustomers = async (req, res) => {
  const { id } = req.params
  const findCustomer = id ? Customer.find({ customer_id: id }) : Customer.find()
  const customers = await findCustomer.lean()
  if (!customers?.length) {
    return res.status(400).json({
      success: false,
      message: 'No customers found',
    })
  }
  res.status(200).json({
    success: true,
    data: customers,
  })
}

const getCustomerID = async () => {
  const customerFound = await Customer.findOne()
    .sort({ _id: -1 })
    .limit(1)
    .lean()
    .exec()
  if (!customerFound) {
    return 'C000000'
  } else {
    let customerID = customerFound.customer_id
    if (customerID.substr(0, 1) === 'P') {
      customerID = customerID.substr(1)
      const numberCustomer = parseInt(customerID, 10)
      customerID = ('0000' + (numberCustomer + 1)).slice(-6)
      return `P${customerID}`
    } else {
      return ''
    }
  }
}

/**
 * @desc Create customer
 * @route POST /customer
 * @access Private
 */
const createNewCustomer = async (req, res) => {
  try {
    const { name, phone, gender, address } = req.body
    if (!name || !phone || !gender || !address) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }
    const customerID = await getCustomerID()
    const customerObject = {
      customer_id: customerID,
      name,
      phone: phone,
      gender: gender,
      address: address,
    }
    // NOTE: Create and stroe new user
    const customer = await Customer.create(customerObject)

    return res.status(200).json({
      success: true,
      data: customer,
    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e,
    })
  }
}

/**
 * @desc Get Update customer
 * @route PATCH /customers
 * @access Private
 */
const updateCustomer = async (req, res) => {
  const { _id, name, phone, gender, address } = req.body
  // NOTE: Confirm Data
  if (
    !name ||
    !phone ||
    !gender ||
    !address
  ) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    })
  }

  const customer = await Customer.findById(_id).exec()

  if (!customer) {
    return res.status(400).json({
      success: false,
      message: 'Customer not found',
    })
  }

  customer.name = name
  customer.phone = phone
  customer.gender = gender
  customer.address = address

  const updatedCustomer = await customer.save()

  res.status(200).json({
    success: true,
    message: `${updatedCustomer.username} updated`,
  })
}

/**
 * @desc Get Delete a customer
 * @route DELETE /customers
 * @access Private
 */
const deleteCustomer = async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Customer ID Required',
    })
  }

  const customer = await Customer.findById(id).exec()

  if (!customer) {
    return res.status(400).json({
      success: false,
      message: 'Customer not found',
    })
  }

  const result = await customer.deleteOne()

  const reply = `Customer ${result.name} with ID ${result._id}`

  res.status(200).json({
    success: true,
    message: reply,
  })
}

module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
}
