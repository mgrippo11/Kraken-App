import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerUsuarios,obtenerUsuario,crearUsuario,modificarUsuario,borrarUsuario
    } from '../controller/usuariosController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerUsuarios)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerUsuario)

// Ruta para crear una base tecnica
router.post('/',[
    //check("HardwareIdentifier","El IMEI es obligatorio").notEmpty(),
],crearUsuario)


// Ruta para modificar una base tecnica
router.put('/:id',[
    //check("HardwareIdentifier","El IMEI es obligatorio").notEmpty(),
], modificarUsuario)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarUsuario)

module.exports = router;