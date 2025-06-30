import e from 'express';
import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}






export default authUser;
// This code defines a middleware function for user authentication in an Express application.