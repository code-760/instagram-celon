const express = require('express');
const { Follwouser, Unfollowuser } = require('../controllers/follwo.controller');
const idtifyuser = require('../middleware/auth.middleware');

const userRoutes = express.Router();

userRoutes.post('/follow/:id', idtifyuser, Follwouser);
userRoutes.post('/Unfollow/:id', idtifyuser,Unfollowuser);

module.exports = userRoutes;
