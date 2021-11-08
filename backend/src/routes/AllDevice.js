import { Router } from 'express';
//import { check } from 'express-validator';
import {obtenerAllDevice} from '../controller/AllDeviceController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerAllDevice)


module.exports = router;