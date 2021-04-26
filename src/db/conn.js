const mongoose = require('mongoose');

const DB = 'mongodb+srv://plenum:System@123@cluster0.6ljfb.mongodb.net/plenum?retryWrites=true&w=majority'

mongoose.connect(DB  ,
{ useNewUrlParser:true, useUnifiedTopology:true , useCreateIndex:true , useFindAndModify:false}
).then( () => {
    console.log(`DB connection successfull  `);
}).catch((error) =>
{
    console.log(error);
});







