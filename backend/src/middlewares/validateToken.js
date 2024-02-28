import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ message: "No hay token, autorización denegada" });

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ message: 'token invalido' })
        
        req.user = user
    })
    next()
}