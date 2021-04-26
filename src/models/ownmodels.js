const mongoose = require('mongoose');
const validator = require("validator");


           
//Owner Schema
const ownerSchema = new  mongoose.Schema(
    {
          


        name:  { 
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

        phone :
        { 
            type : String ,
            required :true ,
           
            
           
        }
            ,

        adrhouse :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,

        adrlocal :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,
        adrland :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,
        adrstate :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,
        adrcity :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        ,
        adrpin :
        { 
            type : String ,
            required :true ,
           
            
           
        }
        
        
            



    }
);




  
// export collections 


const Ownerdata  = new mongoose.model("Ownerdata" ,  ownerSchema);
module.exports = Ownerdata;   


 