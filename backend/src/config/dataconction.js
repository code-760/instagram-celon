 const mongoose = require('mongoose');


 const concteDb=()=>{
  return mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("DB concte ");
    
  })
  
 }

 module.exports=concteDb
