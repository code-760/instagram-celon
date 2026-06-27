
const ImageKit = require('@imagekit/nodejs');
const postModle = require('../models/post.models');
const LikeModel = require('../models/like.model');

// const { toFile } = require('@imagekit/nodejs');



const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

const createpost = async (req, res) => {

  if (!req.file) {
    return res.status(400).json({ mass: 'No file uploaded!' });
  }

  console.log(req.file.buffer);

 const fileBase64 = req.file.buffer.toString('base64');
  

  const file = await imagekit.files.upload({
    file: fileBase64, 
    fileName: 'imaurl',
    folder: 'clone-posts',
  });


  

  const data = await postModle.create({
    caption: req.body.caption,
    imgurl: file.url,
    userid: req.user.id,
  });

  

  res.status(201).json({
    mass:"image post created successfully",
    data,
  });
};


const getpost = async (req, res) => {

  const userid=req.user.id

  const data=await  postModle.findOne({userid})

  res.status(201).json({
    mass: 'user post feching successfully',
    data
  });

}


const getonepost=async(req,res)=>{
    const {postid}=req.permas

   
  const post=await postModle.findById({postid})

  if(!post)
  {
    return res.status(404).json({
      mass:"post not found"

    })
  }

  isvalidestuser=post.userid.toString()=req.user.id

  if(!isvalidestuser){
    return res.status(403).json({
      mass:"this user registrtion is not valid for this post"
    })
  }

  res.status(200).json({
    mass:"Post fetched  successfully.",
    post
  })

}

const isliked=async(req,res)=>{

  const userid=req.user.id;
  const postid=req.body;


  const ispostexist=await postModle.findById(postid);

  if(!ispostexist){
    return res.status(404).json({
      massage:"this post is not exist"
    })
  }


  const islikeexist=await LikeModel.findOne({user:userid,post:postid});
  if(islikeexist){
     const data=await LikeModel.findByIdAndUpdate(islikeexist._id);


    return res.status(201).json({
      message: "Post unliked successfully."
      
    })
   }
   else{

    const data= await LikeModel.create({
      user:userid,
      post:postid,
      islike:true  
    })
    return res.status(200).json({
      massage:"Post liked successfully.",
      data
    })
   }
   
  }

    



   





  
module.exports = { createpost, getpost, getonepost, isliked };
