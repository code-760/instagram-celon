const express = require('express');
const userRoutes = require('./routes/userauth.Route');
const cookieparser=require("cookie-parser")
const postRoutes = require('./routes/post.Routes');

const app = express();
app.use(cookieparser());


app.use(express.json());

app.use("/auth",userRoutes)
app.use("/user-post",postRoutes)


module.exports = app;
