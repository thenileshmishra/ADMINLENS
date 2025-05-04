const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res)=>{
    try{
        const users = await User.find().limit(10).skip(10);
        res.json(users);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});


