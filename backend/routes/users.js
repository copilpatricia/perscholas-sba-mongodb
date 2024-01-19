import {Router} from 'express';
import User from '../models/users.js';

const router = new Router();

router.get('/', async(req, res) => {
    const users = await User.find({});
    res.status(200).json(users)
});

export default router;