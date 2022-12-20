const express = require('express')
const router = express.Router()

const {getProducts,AddProducts, updateProduct, deleteProduct} = require('../controllers/productController')

router.route('/').get(getProducts).post(AddProducts)
router.route('/:id').put(updateProduct).delete(deleteProduct)


module.exports = router 