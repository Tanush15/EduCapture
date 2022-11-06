const mongoose= require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
require('dotenv').config();

//The following code sets the schema for the vaious fields that are required from the end user while registering and the type of each of this fieldd. 

const userSchema =new mongoose.Schema({

    name:{
        type: String,
    },
    email_id:{
        type: String,
    },
    college_name:{
        type: String,
        default:"Delhi Technological University"
    },
    list:[
        {
            item_name:{
                type:String,
            },  
            item_author:{
                type:String,
            },
            item_immage:
            {
                type:String,
            },
           item_description:
            {
                type:String,
            },
            item_id:
            {
                type:String,    
            },
            item_tag:
            {
                type:String,
            },
        }
    ]

})

const User= mongoose.model("Main_Collection",userSchema);
module.exports=User;
