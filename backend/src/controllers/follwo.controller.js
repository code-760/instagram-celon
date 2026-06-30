const followModel = require("../models/follow.models");
const userModle = require("../models/user.models");

// ** follow user api controller  **//
const Follwouser=async(req,res)=>{
  // follower is me
 const  followerid=req.user.id

  // jis me follwo karu ga us ki id ;

 const  followingid = req.params.id

 if(followerid===followingid){
  return res.status(400).json({
    message: 'You cannot follow yourself',
  });
 }

const isFollowuser = await followModel.findOne({
  follower: followerid,
  following: followingid,
});

if (isFollowuser) {
  // Status ko 400 kiya kyunki yeh ek bad request/validation error hai
  return res.status(400).json({
    message: 'You are already following this user', // 'mass' ko 'message' kiya professional touch ke liye
  });
}



 const isuserexist = await userModle.findById( followingid );


 if(!isuserexist){
 return res.status(400).json({
    message: `user is not exist`,
  });
 }

 let finalStatus = 'accepted'; // Default me public maan kar chalenge
 let responseMessage = `You are now following this user`;


 if (isuserexist.isPrivate === true) {
   finalStatus = 'pending';
   responseMessage = 'Follow request sent successfully (Private Account)';
 }

 const data = await followModel.create({
   follower: followerid,
   following: followingid,
   status: finalStatus
 });

 res.status(200).json({
   message: responseMessage
 });


}







// ** Unfollow user  api controller  **//
const Unfollowuser=async(req,res)=>{
   // follower is me
 const  followerid=req.user.id

  // jis me follwo karu ga us ki id ;

 const followingid = req.params.id

const isFollowuser = await followModel.findOne({
  follower: followerid,
  following: followingid,
});

if (!isFollowuser) {
  // Status ko 400 kiya kyunki yeh ek bad request/validation error hai
  return res.status(400).json({
    message: ' You are not following this user', // 'mass' ko 'message' kiya professional touch ke liye
  });
}

const data=await followModel.findOneAndDelete({
  follower: followerid,
  following: followingid, })


  res.status(200).json({
    message: `you are unfollowing ${followingid}`,
  }); 


}



const hendleFollowRequest = async (req, res) => {


  // requestId :metlb jo follow model me _id hai usko use karna hai aur action me accept ya reject ka option hai

  const { requestId, action } = req.body;
  
  if (!['accepted', 'rejected'].includes(action)) {
    return res.status(400).json({ message: 'Invalid action. Use accepted or rejected' });
  }

  
  const updatedRequest = await followModel.findByIdAndUpdate(
    requestId,
    { status: action }, 
    { new: true }, 
  );

 
  if (!updatedRequest) {
    return res.status(404).json({ message: 'Follow request not found' });
  }

 
  return res.status(200).json({
    message: `Follow request ${action} successfully`,
    data: updatedRequest,
  });
};



 






module.exports = { Follwouser, Unfollowuser };
