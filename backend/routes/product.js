const express=require('express')
const router=express.Router()

const { newProduct, getProducts, getSingleProduct, updateProducts, deleteProduct}=require('../controller/productController')

//Get all products
router.route('/products').get(getProducts)
//Get a single product with id
router.route('/products/:id').get(getSingleProduct)
//Post a product
router.route('/admin/products/new').post(newProduct)
//Update a product
router.route('/admin/products/:id').put(updateProducts)
//Delete a product
router.route('/admin/products/:id').delete(deleteProduct)

module.exports=router