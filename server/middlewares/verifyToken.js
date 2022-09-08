const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.req.params.access_token;

    if (!token) return res.status(401).send('Không tìm thấy token');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        
        next();
    } catch (err) {
        return res.status(400).send('Token sai');
    }
};