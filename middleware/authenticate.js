const jwt = require('jsonwebtoken');
const Col = require("../src/models/model");

const Authenticate = async (req , res , next) => {

    try { 
      

        let token = req.cookies.jwttoken;
        const verifytoken = jwt.verify(token , "mynameissachindiwakaryoutuberandfreelanceruptomarkalphonic");

        const rootUser = await Col.findOne({_id:verifytoken._id , "tokens.token":token})
     
        if(!rootUser){throw new Error('user not found')}
   
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

        
    } catch (error) {
 
        res.status(401).send("unauth token")
        console.log(error);
        
    }
    
}

module.exports = Authenticate;
