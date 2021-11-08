const mongoose = require('mongoose');
const {Schema} = mongoose;

const AuthSchema = new Schema({
    user: { 
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: { 
        type: String,
        require: true,
        trim: true
    },
    rol: { 
        type: String,
        default: "USER_ROLE",
        require: true
    }
});

module.exports = mongoose.model('Auth', AuthSchema)
