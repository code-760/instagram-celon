require('dotenv').config();
const app=require("./src/app")
const concteDb = require("./src/config/dataconction")



concteDb()


app.listen(3000,()=>{
  console.log("server start boy's")
})
