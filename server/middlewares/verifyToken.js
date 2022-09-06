const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res, next) => {
    // const token = req.header('access_token');
    const token = req.cookies.access_token;

    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        next(res.json(verified));
    } catch (err) {
        return res.status(400).send('Invalid Token');
    }
};