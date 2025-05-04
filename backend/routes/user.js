const express = require("express");
const router = express.Router();
const User = require('../models/user');


   // GET all users

router.get('/', async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//POST a new user

router.post('/', async (req, res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({ message: err.message });
    }

})

