import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const dispositivo = mongoose.Schema({

    Imei: {type: Number, required: true, trim: true, unique: true},
    UserName: {type: String, required: true, trim: true},
    Marca: {type: String, required: true},
    ModelIdName: {type: String, required: true},
    PhoneNumber: {type: Number, trim: true}/*,
    ModeloID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "modelo"
    }*/
})

dispositivo.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('Dispositivo',dispositivo);