// Importing required libraries 
const express =require('express');
const User= require('../models/userSchema');
const bcrypt =require('bcryptjs');

//Using Express Router Class
const router=express.Router();

// Register the data of a new member into the DB
 router.post('/register',async (req,res)=>{

    const{name,email_id,college_name,password}=req.body;

    try
    {
        const userLogin = await User.findOne({email_id});
        if(userLogin) return res.status(403).json({error:"{Forbidden to create multiple accounts} Email already exists"});
        
                
        const user =new User({name,email_id,college_name,password});
        await user.save();
        console.log(user);
        res.status(201).json({message :"Registered sucessfully"});
    }
    catch(err){
        //Consoling error for proper debugging.
        console.log(err);
        res.status(500).json({error:"We are experiencing some server problems!!"})
    }
 });

router.get('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findById(_id);
        console.log(single_user);
        res.status(200).send(single_user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"We are experiencing some server problems!!"})
    }
 });

 

router.patch('/add_data/:id',async (req,res)=>{
    const email_id =req.params.id;
    const userLogin = await User.findOne({email_id});
    const user = new User({email_id});
    if(!userLogin) 
    {
        await user.save();
    }


    
    console.log("Hello");
    try
    {
        console.log("try");
        console.log(req.body);
        console.log(req.params.id);

        const newItem = 
        {
            item_name:req.body.item_name,
            item_author: req.body.item_author,
            item_immage:req.body.item_image,
            item_description:req.body.item_description,
            item_tag:req.body.item_tag
            
        };
        console.log(newItem);
        
        const response = await User.findOneAndUpdate(
          {
            email_id: req.params.id,
          },
          {
            $addToSet: {
              list: newItem,
            },
          }
        )
       
        console.log(response);
        res.status(201).json({message:"Listing successfully added on the website"});
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"We are experiencing some server problems!!"})
    }
 });



 //Get the whole data from the database 
 router.get('/db',async (req,res)=>
 {
    try
    {
        const user =await User.find({});
        console.log(user);
        res.status(200).send(user);
    }
    catch(err){
        //Consoling error for proper debugging.
        console.log(err);
        res.status(500).json({error:"We are experiencing some server problems!!"})
    }
 });

 module.exports=router;


