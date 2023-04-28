const path = require('path')
const { dirname } = require('path')
// ROOT PATH
const rootDir = dirname(require.main.filename)
const fs = require('fs-extra')
const formidable = require('formidable')
const Product = require('../models/Product')


// Upload Image
const uploadImage = async (files, id) => {
  if (files.image != null) {
    const fileExtention = files.image.originalFilename.split('.')[1]
    const newImageName = `${Date.now()}.${fileExtention}`
    const newpath = path.resolve(rootDir, 'public/images', newImageName)
    if (await fs.exists(newpath)) {
      await fs.remove(newpath)
    }
    await fs.moveSync(files.image.filepath, newpath)

    // NOTE: Update product image
    return await Product.findByIdAndUpdate(
      id,
      { image: newImageName },
      {
        new: true,
      }
    )
  }
}

/**
 * @desc Get all product
 * @route GET /product
 * @access Private
 */
const getAllProducts = async (req, res) => {
  const { id } = req.params
  const findProduct = id ? Product.find({ product_id: id }) : Product.find()
  const products = await findProduct.lean()
  if (!products?.length) {
    return res.status(400).json({
      success: false,
      message: 'No products found',
    })
  }
  res.status(200).json({
    success: true,
    data: products,
  })
}

const getProductID = async () => {
  const productFound = await Product.findOne()
    .sort({ _id: -1 })
    .limit(1)
    .lean()
    .exec()
  if (!productFound) {
    return 'P000000'
  } else {
    let productID = productFound.product_id
    if (productID.substr(0, 1) === 'P') {
      productID = productID.substr(1)
      const numberProduct = parseInt(productID, 10)
      productID = ('0000' + (numberProduct + 1)).slice(-6)
      return `P${productID}`
    } else {
      return ''
    }
  }
}

const toNumber = (str) => {
  const number = Number(str)
  return !Number.isNaN(number) ? number : 0
}

/**
 * @desc Create product
 * @route POST /product
 * @access Private
 */
const createNewProduct = async (req, res) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, async (error, fields, files) => {
      if (error) {
        return res.status(400).json({
          success: false,
          message: error,
        })
      }
      const { name, price, amount, description } = fields
      if (!name || !price || !amount) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required',
        })
      }
      const productID = await getProductID()
      const productObject = {
        product_id: productID,
        name,
        price: toNumber(price),
        amount: toNumber(amount),
        description: description || '',
        image: '',
      }
      // NOTE: Create and stroe new user
      const product = await Product.create(productObject)
      const result = await uploadImage(files, product._id)
      return res.status(200).json({
        success: true,
        data: result,
      })
    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e,
    })
  }
}

/**
 * @desc Get Update product
 * @route PATCH /products
 * @access Private
 */
const updateProduct = async (req, res) => {
  const { _id, name, price, amount, description, image } = req.body
  // NOTE: Confirm Data
  if (
    !name ||
    !price ||
    !amount 
  ) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    })
  }

  const product = await Product.findById(_id).exec()

  if (!product) {
    return res.status(400).json({
      success: false,
      message: 'Product not found',
    })
  }

  product.name = name
  product.price = price
  product.amount = amount
  product.description = description
  product.image = image

  const updatedProduct = await product.save()

  res.status(200).json({
    success: true,
    message: `${updatedProduct.username} updated`,
  })
}

/**
 * @desc Get Delete a product
 * @route DELETE /products
 * @access Private
 */
const deleteProduct = async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Product ID Required',
    })
  }

  const product = await Product.findById(id).exec()

  if (!product) {
    return res.status(400).json({
      success: false,
      message: 'Product not found',
    })
  }

  const result = await product.deleteOne()

  const reply = `Product ${result.name} with ID ${result._id}`

  res.status(200).json({
    success: true,
    message: reply,
  })
}

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
}
