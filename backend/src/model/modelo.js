import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const modelo = mongoose.Schema({
    Modelo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Marca: {
        type: String,
        required: true,
        trim: true
    },
})

modelo.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('modelo',modelo);