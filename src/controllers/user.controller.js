const express = require('express')
const router = express.Router();
const User =require('../models/user.models')
const crudController = require('./crud.controller')

router.get("",async(req,res)=>{

    try {
        const page =+req.query.page
        const number =+ req.query.number
        
        const documents= await User.find().skip((page-1)*number).limit(number).lean().exec()
        const numberofPages=await (User.find().countDocuments().lean().exec())/number
        res.send({"documents":documents, "NoOfPages":Math.ceil(numberofPages)})

        
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.post("/new",crudController(User).createUser)


module.exports= router