


// // REST API

// app.get("/api" , async (req , res) =>{


//     const finds = await Col.find();
//     res.status(200).send(finds);
   
// });


// app.post("/api" , async (req , res) =>{

// try{
//     const result = new Col(req.body);
//     const store = await result.save();
//     res.status(201).send(store);

// }catch(err)
// {
//     res.status(400).send(err);
// }

// })
  
   
    // const { email , password} = req.body;
    // console.log(email);
    // console.log(password);

    //    const useremal = await Col.findOne({email : email});
    //    console.log(useremal.password);

    //    const isMarchPass = await bcrypt.compare(password   , useremal.password)

     

    //     const pass = password;
    //     const cpass = useremal.password;
         
    //     const com = await bcrypt.compare(pass , cpass);
    //     console.log(com); 
       

  

    //    if(com)
    //    {    

    //     res.status(400).send("<h1>sucess</h1>");
    //    }
    // else{
    //     res.send("invaild")
    // }


    




    // const passwords = "ram";
    // const cpass2 = "$2a$10$Q/vcrJ8pAsPOFS2BcLVoJOy0IPmVifbpHkaP8eWDuJgryKltkueuO";
    // console.log(passwords);
    // console.log(cpass2);


  
//     pass = await bcrypt.compare(passwords , cpass2);
//     console.log(pass);

    

//  const   b1 = await bcrypt.compare(password , useremail.password);
//  const   b2 = await bcrypt.compare(password , useremail.cpassword);
// console.log(password);
// console.log(useremail.password);
// console.log(b1);
// console.log(useremail.cpassword);
// console.log(b2);