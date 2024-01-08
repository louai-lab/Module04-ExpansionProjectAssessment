import express from 'express'

import { getAllProducts , AddProduct} from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/add',AddProduct)



export default productRouter