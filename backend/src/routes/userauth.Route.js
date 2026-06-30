const express = require('express');
const { userregistrtion, loginmathrd, getme } = require('../controllers/userauth.controller');

const userauthRoutes = express.Router();

userauthRoutes.post('/registrtion', userregistrtion);
userauthRoutes.post('/login-user', loginmathrd);
userauthRoutes.get('/getme', getme);

module.exports = userauthRoutes;
