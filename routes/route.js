const express = require("express");
const route = new express.Router();
const bodyParser = require('body-parser');

route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());




//Routes

route.get("/home" , authenticate  ,(req , res) =>{

    console.log("Active Middleware")
       res.send(req.rootUser);
     
       
        
    
    });
    
    
    route.post("/register" , async (req , res ) =>{
    
    
     
       
            
            const password = req.body.password;
               const cpassword = req.body.cpassword;
        
               if (password === cpassword)
               {
    
        
    const result = new Col(req.body);
    
    
    
    
    
    await result.save();
    res.status(201).json({message:"Registred successfully"});
    console.log(result);
               }  else{
                       res.send("password are not matching");
                   }
    })
    
    
    
    
    
    
    
    route.get("/login1" , (req , res) =>{
        res.cookie( "cookie1" ,"sachin");
        res.render("Login");
       
    })
    
    
    route.post("/login" , async (req , res) =>{
    
    
        const {email , password}  = req.body;
        const useremail =  await Col.findOne({email:email});
    
    
        
        token = await useremail.generateAuthToken();
        res.cookie("jwttoken" , token  , {
            expires: new Date(Date.now() + 25892000000) ,
            httpOnly: true
        });
    
        console.log(`my cookie ${req.cookies.jwttoken}`)
    
    
    isMatch = await bcrypt.compare(password , useremail.password);
    console.log(isMatch);
    
        if(email == useremail.email) 
        {
            res.status(400).json({error:"invalid users"})
        } else{
            res.json({message:"logins users successfully"}) 
    
        } 
    
        
    }
    
    
    );
    
    
    route.get("/logout" , (req , res) =>{
    
        console.log("Active Middleware");
        //    res.clearCookie('jwttoken' , {path: '/login'})
        //    res.status(200).send("user logout");
           res.clearCookie('jwttoken');
       res.send('cookie jwttoken cleared');
         
           
            
        
        });
    
    