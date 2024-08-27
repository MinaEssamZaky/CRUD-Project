import express from 'express'
import { addProduct, DeleteProduct, GetAllProduct, GetProductById, UpdateProduct } from './product.controler.js'
const router= express.Router()

router.post('/products',addProduct)
router.get('/products',GetAllProduct)
router.get('/products/:id',GetProductById)
router.delete('/products',DeleteProduct)
router.put('/products',UpdateProduct)

export default router