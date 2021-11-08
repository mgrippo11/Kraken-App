import modelo from '../model/modelo'
import { validationResult } from 'express-validator';


const obtenermodelos = async (req,res) => {
    const modeloDB = await modelo.find({});

    return res.json({
        'data': modeloDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenermodelo = async (req,res) => {
    const modeloDB = await modelo.findById(req.params.id);

    if (!modeloDB) {
        return res.status(404).json({
            'mensaje': 'No se encontro modelo.',
            'status': 404
        });
    }
    return res.json({
        'data': modeloDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearmodelo = async (req,res) => {
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
    const newModelo = await modelo({
        "Modelo": req.body.Modelo,
        "Marca": req.body.Marca
    });

    // Guardamos el objeto en la BD
    newModelo.save((err,db) => {
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

const modificarmodelo = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newModelo = {
        "Modelo": req.body.Modelo,
        "Marca": req.body.Marca
    }

    // Actualizo el objeto BaseTecnica
    await modelo.findByIdAndUpdate(req.params.id,newModelo,{new: true, upsert: true},(err,db) => {
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

const borrarmodelo = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await modelo.findByIdAndRemove(req.params.id,(err,db) => {
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
    obtenermodelos,obtenermodelo,crearmodelo,modificarmodelo,borrarmodelo
}