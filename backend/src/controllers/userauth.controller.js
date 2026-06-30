const userModle = require('../models/user.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userregistrtion = async (req, res) => {

  
  
  const { name, password, email, bio, profilephoto } = req.body;


  const isuserinDB = await userModle.findOne({
    $or: [{ email }, { name }],
  });

  if (isuserinDB) {
    return res.status(409).json({
      mass: 'User already exists ' + (isuserinDB.email == email ? ' with this email' : ' with this name'),
    });
  }

  const hash = bcrypt.hashSync(password, 10);

  let obj = { name, password: hash, email, bio, profilephoto };

  const user = await userModle.create(obj);

  const Tokan = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );

  res.cookie('tokan', Tokan);

  res.status(200).json({
    mass: 'user carate',
    data: {
      name: user.name,
      email: user.email,
      bio: user.bio,
      profile: user.profilephoto,
    },
    Tokan,
  });
};

const loginmathrd = async (req, res) => {

  console.log(req.body)
  const { email, password, name } = req.body;

  const isuserlogin = await userModle.findOne({
    $or: [{ email: email }, { name: name }],
  });

  if (!isuserlogin) {
    return res.status(401).json({
      mass: 'User not found',
    });
  }

  const ispassword = await bcrypt.compare(password, isuserlogin.password);

  if (!ispassword) {
    return res.status(401).json({
      mass: 'invalid passwode',
    });
  }

  const Tokan = jwt.sign(
    {
      id: isuserlogin._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );

  res.cookie('tokan', Tokan);

  res.status(200).json({
    mass: 'login succefully',
    data: {
      name: isuserlogin.name,
      email: isuserlogin.email,
      bio: isuserlogin.bio,
      profile: isuserlogin.profilephoto,
    },
  });
};


const getme=(req,res)=>{
  const id=req.user.id


 const user=userModle.findById(id)

  res.status(200).json({  
    data: user      
  });

};

module.exports = { userregistrtion, loginmathrd, getme };
