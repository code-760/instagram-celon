const mongoose = require('mongoose'); // Erase if already required


var postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
    unique: true,
  },
  imgurl: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: [true, 'user id is required for creating an post'],
  },
});

//Export the model
const postModle = mongoose.model('post', postSchema);

module.exports=postModle
