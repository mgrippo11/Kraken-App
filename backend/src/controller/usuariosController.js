import usuario from '../model/usuario'
import { validationResult } from 'express-validator';


const obtenerUsuarios = async (req,res) => {
    const usuarioDB = await usuario.find({});

    return res.json({
        'data': usuarioDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerUsuario = async (req,res) => {
    const usuarioDB = await usuario.findById(req.params.id);

    if (!usuarioDB) {
        return res.status(404).json({
            'mensaje': 'No se encontro usuario.',
            'status': 404
        });
    }
    return res.json({
        'data': usuarioDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearUsuario = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    // Creo el objeto BaseTecnica
    const newUsuario = await usuario({
        "UserName": req.body.UserName,
        "Nombre": req.body.Nombre,
        "Apellido": req.body.Apellido
    });

    // Guardamos el objeto en la BD
    newUsuario.save((err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al crear el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    })
}

const modificarUsuario = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newUsuario = {
        "UserName": req.body.UserName,
        "BaseTecnica": req.body.BaseTecnica || null
    }

    // Actualizo el objeto BaseTecnica
    await usuario.findByIdAndUpdate(req.params.id,newUsuario,{new: true, upsert: true},(err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al modificar el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    });
}

const borrarUsuario = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await usuario.findByIdAndRemove(req.params.id,(err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al borrar el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    });
}

module.exports = {
    obtenerUsuarios,obtenerUsuario,crearUsuario,modificarUsuario,borrarUsuario
}