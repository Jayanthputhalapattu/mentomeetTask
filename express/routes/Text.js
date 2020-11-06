const express = require("express")
const router = express.Router();
const Text = require("../models/text")

router.post('/',(req,res,next)=>{
    Text.create(req.body)
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data)
    },(err)=>next(err))
       
    
})

router.get("/",(req,res,next)=>{
    Text.find({})
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.json(data)
        console.log(data)
    },err=>next(err))
})
module.exports = router