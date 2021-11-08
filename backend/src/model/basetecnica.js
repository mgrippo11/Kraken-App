import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const BaseTecnica = mongoose.Schema({
    SmartGroupID: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    BaseName: {
        type: String,
        required: true,
        trim: true
    },
    Region: {
        type: String,
        trim: true
    },
    UserNameID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
})

BaseTecnica.plugin(uniqueValidator, { message: 'El {PATH} ya existe.' })

module.exports = mongoose.model('BaseTecnica',BaseTecnica);