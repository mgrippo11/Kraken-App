import { Router } from 'express';
import { check } from 'express-validator';
import {obtenermodelos,obtenermodelo,crearmodelo,modificarmodelo,borrarmodelo
    } from '../controller/ModelosController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenermodelos)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenermodelo)

// Ruta para crear una base tecnica
router.post('/',[
    check("Modelo","El Modelo es obligatorio").notEmpty(),
],crearmodelo)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("Modelo","El Modelo es obligatorio").notEmpty(),
], modificarmodelo)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarmodelo)

module.exports = router;