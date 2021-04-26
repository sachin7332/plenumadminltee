const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

           
 
//Admin Schema
const userSchema = new  mongoose.Schema(
    {
          


        user:  { 
            type : String ,
            required :true ,
        } ,
      
        email :
        { 
            type : String ,
            required :true ,
            // unique : true,
            validate(val)
            {
                if(!validator.isEmail(val))
                {
                    throw new Error("Email is Not Valid")
                }
            }
                
            

        }
        ,

        password :
        { 
            type : String ,
            required :true ,
           
            
           
        }
            ,

        cpassword :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,

        tokens:[
           { token :
            { 
                type : String ,
                required :true ,
               
                
               
            }}
                
        ] 
            



    }
);




//generate token 
userSchema.methods.generateAuthToken = async function(){

    try {
        console.log(this._id);
    
        const token = jwt.sign({_id:this._id.toString()} ,"mynameissachindiwakaryoutuberandfreelanceruptomarkalphonic", { expiresIn: '1800s' });
        console.log(token);
        this.tokens = this.tokens.concat({token});
    await this.save();
        
        return token;
        
    } catch (error) {
        res.send(error)
    }
}



//hash password

   userSchema.pre('save', async function (next) {

    console.log(this.password);
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    const hash2 = await bcrypt.hash(this.cpassword, 10);
    this.cpassword = hash2;
    console.log(this.password); 
    next()
  });

  
// export collections 

const Userdata  = new mongoose.model("Userdata" ,  userSchema);
module.exports = Userdata;   
  


 