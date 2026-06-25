const express = require('express');
const { userregistrtion, loginmathrd } = require('../controllers/userauth.controller');

const userRoutes=express.Router()

userRoutes.post("/registrtion",userregistrtion);
userRoutes.post('/login-user',loginmathrd);




module.exports=userRoutes
