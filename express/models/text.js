const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Text = new Schema({
    name : {
        
       type:String,
       required:true
    }
    
},{timestamps:true})

module.exports = mongoose.model('Task',Text)