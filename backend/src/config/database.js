import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('[+] Base de datos: Conectada')
    } catch (error) {
        console.log('[-] Base de datos: Error')
    }
}

module.exports = {connect}