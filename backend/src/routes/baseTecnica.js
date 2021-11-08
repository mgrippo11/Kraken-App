import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerBases,obtenerBase,crearBase,modificarBase,borrarBase} from '../controller/basestecnicasController'

const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerBases)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerBase)

// Ruta para crear una base tecnica
router.post('/',[
    check("SmartGroupID","El SmartGroupID es obligatorio").notEmpty(),
    check("BaseName","El BaseName es obligatorio").notEmpty()
],crearBase)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("SmartGroupID","El SmartGroupID es obligatorio").notEmpty(),
    check("BaseName","El BaseName es obligatorio").notEmpty()
], modificarBase)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarBase)

module.exports = router;



