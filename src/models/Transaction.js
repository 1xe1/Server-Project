const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  transaction_id: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  customer: {
    type: Object,
    required: true,
  },
  seller: {
    type: Object,
    required: true,
  },
  create_date: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('Transaction', transactionSchema)
