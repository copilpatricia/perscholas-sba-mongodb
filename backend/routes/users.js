import {Router} from 'express';
import User from '../models/users.js';

const router = new Router();

// GET route to returns all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
});

// POST route to create a new user

router.post('/', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
        
    } catch (error) {
        console.log(error)
    }
})

export default router;