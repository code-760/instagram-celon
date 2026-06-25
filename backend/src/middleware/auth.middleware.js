const jwt = require('jsonwebtoken');

const idtifyuser = (req, res, next) => {
  const tokan = req.cookies.tokan;

  if (!tokan) {
    return res.status(401).json({
      mass: 'Unauthorized tokan',
    });
  }

  let decode = null;

  try {
    decode = jwt.verify(tokan, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      mass: 'Unauthorized: Invalid token',
    });
  }


  req.user = decode;
   next();
};

module.exports = idtifyuser;
