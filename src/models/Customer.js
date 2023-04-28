const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
})

module.exports = mongoose.model('Customer', customerSchema)
00000000000000