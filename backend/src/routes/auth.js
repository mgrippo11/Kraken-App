import { Router } from'express';
import { check } from'express-validator'
import {login} from'../controller/AuthController';

const router = Router();

router.post('/login', 
    [
        check('user','El usuario es obligatorio').not().isEmpty(),
        check('password','La contraseña es obligatoria.').not().isEmpty(),
    ]
    ,login);

module.exports = router;

