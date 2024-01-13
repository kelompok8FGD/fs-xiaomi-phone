const { verify } = require('jsonwebtoken');
//Middleware function to validate a token from the request header
module.exports = (req, res, next) => {
  // Extract the 'authorization' header from the request
  const authorization = req.get('authorization');
   // Initialize the token variable
  let token = ''
  // Check if 'authorization' header is missing
  if (!authorization) {
    return res.status(401).json({ error: 'User not logged in' });
  }
// Check if 'authorization' header starts with 'Bearer'
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    // Extract the token after Bearer
    token = authorization.substring(7)
  }
   // Verify the token using the secret key
   try {
    const validToken = verify(token, process.env.SECRET_KEY);

    // Check if the token is missing or invalid
    if (!token || !validToken.id) {
      return res.status(401).json({ error: 'Token is missing or invalid' });
    }

    // Attach the customer ID from the token to the request object
    req.id_customer = validToken.id;

    // Call the next middleware or route handler in the chain
    next();
  } catch (error) {
    // Handle errors during token verification
    return res.status(401).json({ error: 'Token is missing or invalid' });
  }


};
