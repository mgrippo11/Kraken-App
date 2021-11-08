import Auth from '../model/Auth';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
require('dotenv').config();
const secretkey = process.env.JWTSECRET;

exports.login = async (req, res) => {
    // Validacion de errores
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }
    
    const { user, password } = req.body

    try { 
        // Validar que exista un usuario con esa password en la base de datos
        const userLogin = await Auth.findOne({user,password});
        if (!userLogin) {
            return res.status(400).json({msg: "El usuario y/o la contraseña son incorrecta."});
        }
        const token = await jwt.sign({
                                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                                        data: userLogin
                                    }, secretkey, { algorithm: 'HS256' });
        res.json({ token , msg: "Bienvenido a TecoTest"});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Ocurrio un error en la validacion de certificados."});
    }
}
