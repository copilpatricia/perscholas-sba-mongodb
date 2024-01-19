import {Router} from 'express';
import Review from '../models/reviews.js';

const router = new Router();

router.get('/', async(req, res) => {
    const reviews = await Review.find({});
    res.status(200).json(reviews)
});

export default router;