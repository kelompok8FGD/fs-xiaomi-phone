const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.status(401).json({ error: 'User not logged in' });
  }

  try {
    const validToken = verify(accessToken, 'importantsecrete');
    // the constituent of validtoken would be the payload datas
    // setting the req.user to the data available on the encrypted validtoken
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { validateToken };
