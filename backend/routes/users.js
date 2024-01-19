import {Router} from 'express';
import User from '../models/users.js';

const router = new Router();

// GET route  returns all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
});

//GET/:id route returns a single user selected by id
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.json({ msg: "User not found!" });
    }
});

// POST route to create a new user
router.post('/', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
        
    } catch (error) {
        console.log(error);
    }
});


//PUT route to update an existing user
router.put("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updatedUser = await User.findByIdAndUpdate(id, body, {new: true});
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.json({ msg: "User not found!" });
    }
});

//DELETE route to delete an user
router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({ msg: "User deleted", deletedUser });
    } catch (error) {
        console.log(error);
    }
})

export default router;