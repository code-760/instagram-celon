const express = require('express');
const userauthRoutes = require('./routes/userauth.Route');
const userRoutes = require('./routes/user.Routes');
const cookieparser=require("cookie-parser")
const postRoutes = require('./routes/post.Routes');
const cors=require("cors")



const app = express();
app.use(cookieparser());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);


app.use(express.json());

app.use("/auth",userauthRoutes)
app.use("/user-post",postRoutes)
app.use('/api/user',userRoutes);

module.exports = app;
