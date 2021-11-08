import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const estado = mongoose.Schema({
    Estado: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
})

estado.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('estado',estado);