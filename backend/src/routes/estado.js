import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerEstados,obtenerEstado,crearEstado,modificarEstado,borrarEstado
    } from '../controller/EstadosController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerEstados)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerEstado)

// Ruta para crear una base tecnica
router.post('/',[
    check("Estado","El Estado es obligatorio").notEmpty(),
],crearEstado)

// Ruta para modificar una base tecnica
router.put('/:id',[
    check("Estado","El Estado es obligatorio").notEmpty(),
], modificarEstado)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarEstado)

module.exports = router;