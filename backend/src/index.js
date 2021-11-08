import app from './config/server';
import {connect} from './config/database';
require('dotenv').config();

function main() {
    try {
        connect();
        app.listen(process.env.PORT);
        console.log(`[+] Servidor UP en el puerto ${process.env.PORT}`);
    } catch (error) {
        console.log('[-] Ocurrio un error al iniciar el servidor',error)
    }
}


main();

module.exports = app;