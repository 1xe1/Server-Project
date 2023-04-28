const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: true,
  },
})

module.exports = mongoose.model('Product', productSchema)
