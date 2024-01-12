const { verify } = require('jsonwebtoken');

//Middleware function to validate a token in the request header.
const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.status(401).json({ error: 'User not logged in' });
  }

  try {
    const validToken = verify(accessToken, process.env.SECRET_KEY);
    // the constituent of validtoken would be the payload datas
    // If the token is valid, it sets the `req.user` to the data available in the encrypted validtoken
    req.user = validToken;
    if (validToken) {
      return next();
    } 
  } catch (err) {
    return res.status(500).json({ error: err.message }); // If the token is not valid or missing, it sends an error response.
  }
};

module.exports = { validateToken };
