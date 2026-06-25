const express = require('express');
const postController = require('../controllers/post.controller');
const multer = require('multer');
const idtifyuser = require('../middleware/auth.middleware');
const upload = multer({ storage: multer.memoryStorage() });

const postRoutes = express.Router();

postRoutes.post('/post-img',upload.single('imgurl'),idtifyuser,postController.createpost);
postRoutes.get('/get-post',idtifyuser, postController.getpost);
postRoutes.get('/get-post-one/:id',idtifyuser, postController.getpost);

module.exports = postRoutes;
