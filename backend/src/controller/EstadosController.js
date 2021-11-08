import estado from '../model/estado'
import { validationResult } from 'express-validator';


const obtenerEstados = async (req,res) => {
    const estadoDB = await estado.find({});

    return res.json({
        'data': estadoDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerEstado = async (req,res) => {
    const estadoDB = await estado.findById(req.params.id);

    if (!estadoDB) {
        return res.status(404).json({
            'mensaje': 'No se encontro estado.',
            'status': 404
        });
    }
    return res.json({
        'data': estadoDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearEstado = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    // Creo el objeto Estado
    const newEstado = await estado({
        "Estado": req.body.Estado
    });

    // Guardamos el objeto en la BD
    newEstado.save((err,db) => {
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

const modificarEstado = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newEstado = {
        "Estado": req.body.Estado
    }

    // Actualizo el objeto BaseTecnica
    await estado.findByIdAndUpdate(req.params.id,newEstado,{new: true, upsert: true},(err,db) => {
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

const borrarEstado = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await estado.findByIdAndRemove(req.params.id,(err,db) => {
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
    obtenerEstados,obtenerEstado,crearEstado,modificarEstado,borrarEstado
}