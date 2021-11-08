import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerDispositivos,obtenerDispositivo,crearDispositivo,modificarDispositivo,borrarDispositivo
    } from '../controller/dispositivosController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerDispositivos)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerDispositivo)

// Ruta para crear una base tecnica
router.post('/',[
    check("Imei","El IMEI es obligatorio").notEmpty(),
],crearDispositivo)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("Imei","El IMEI es obligatorio").notEmpty(),
], modificarDispositivo)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarDispositivo)

module.exports = router;