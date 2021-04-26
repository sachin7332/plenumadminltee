const express = require("express");
const { dirname } = require("path");
const hbs = require("hbs"); 
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var cookieParser = require('cookie-parser');



const path = require("path");
require(path.join(__dirname , "../src/db/conn"));
const Col = require("../src/models/model");
const Own = require("../src/models/ownmodels");
const authenticate = require('../middleware/authenticate')

const app = express();
const port = process.env.PORT || 5000;   
app.use(cookieParser());


//path define
const staticpath = path.join(__dirname , "../public")
const viewpath = path.join(__dirname , "../views")
const parpath = path.join(__dirname , "../viesw/partiaol")
// console.log(parpath);


// set and use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(staticpath));
app.set("view engine" , "hbs");
app.set("views" , viewpath);
hbs.registerPartials(parpath);
 


app.get("/home" , authenticate  ,(req , res) =>{

console.log("Active Middleware")
   res.send(req.rootUser);
 
   
    

});


app.post("/register" , async (req , res ) =>{


 
   
        
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






app.post("/login" , async (req , res) =>{


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


app.get("/logout" , (req , res) =>{

    console.log("Active Middleware");
    //    res.clearCookie('jwttoken' , {path: '/login'})
    //    res.status(200).send("user logout");
       res.clearCookie('jwttoken');
   res.send('cookie jwttoken cleared');
     
       
        
    
    });



    //owner form fill
    app.post("/owner" , async (req , res ) =>{

    
const result = new Own(req.body);
await result.save();
res.status(201).json({message:"form fill successfully"});
console.log(result);
          
})



app.get("/owntab" , async(req , res) =>{

    try{

        // const _id = req.params.id;
        // const finds = await Col.findById({_id});
        // res.status(200).send(finds);
                const finds = await Own.find();
        
        res.status(200).send(finds);
        // res.json(finds);
     }catch(e){
         res.send(e);
     }
       
     
       
        
    
    });


app.get("/owntab/:id" , async(req , res) =>{

    try{

        let _id = req.params.id;
                const finds = await Own.findById({_id});
        console.log(finds);
        res.status(200).send(finds);
        res.json(finds);
     }catch(e){
         res.send(e);
     }
        
    
    });




    if(process.env.NODE_ENV == "production") {
        app.use(express.static("client/build"))
    }

    

app.listen(port , (req , res) =>{

   console.log(`Server is on port no ${port}`);
});








