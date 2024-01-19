import {Router} from 'express';
import Product from '../models/products.js';

const router = new Router();

router.get('/', async(req, res) => {
    const products = await Product.find({});
    res.status(200).json(products)
})

export default router;