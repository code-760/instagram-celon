const express = require('express');
const { userregistrtion, loginmathrd } = require('../controllers/userauth.controller');

const userauthRoutes = express.Router();

userauthRoutes.post('/registrtion', userregistrtion);
userauthRoutes.post('/login-user', loginmathrd);

module.exports = userauthRoutes;
