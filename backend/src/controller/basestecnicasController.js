import BaseTecnica from '../model/basetecnica'
import { validationResult } from 'express-validator';


const obtenerBases = async (req,res) => {
    const basesTecnicasDB = await BaseTecnica.find({});

    return res.json({
        'data': basesTecnicasDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerBase = async (req,res) => {
    const baseTecnicaDB = await BaseTecnica.findById(req.params.id);

    if (!baseTecnicaDB) {
        return res.status(404).json({
            'mensaje': 'No se encontro base tecnica.',
            'status': 404
        });
    }
    return res.json({
        'data': baseTecnicaDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearBase = async (req,res) => {
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
    const newBaseTecnica = await BaseTecnica({
        "SmartGroupID": req.body.SmartGroupID,
        "BaseName": req.body.BaseName,
        "Region": req.body.Region || null
    });

    // Guardamos el objeto en la BD
    newBaseTecnica.save((err,db) => {
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

const modificarBase = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newBaseTecnica = {
        "SmartGroupID": req.body.SmartGroupID,
        "BaseName": req.body.BaseName,
        "Region": req.body.Region || null
    }

    // Actualizo el objeto BaseTecnica
    await BaseTecnica.findByIdAndUpdate(req.params.id,newBaseTecnica,{new: true, upsert: true},(err,db) => {
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

const borrarBase = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await BaseTecnica.findByIdAndRemove(req.params.id,(err,db) => {
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
    obtenerBases,obtenerBase,crearBase,modificarBase,borrarBase
}
