import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import baseTecnicaRouter from '../routes/baseTecnica';
import dispositivoRouter from '../routes/Dispositivo';
import usuarioRouter from '../routes/usuario';
import estadoRouter from '../routes/estado';
import modeloRouter from '../routes/modelo';
import authRouter from '../routes/auth';
import AllDeviceRouter from '../routes/AllDevice';
class App {
    constructor() {
        
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(morgan('dev'));
        this.express.use(cors());
    }

    routes() {
        this.express.use('/api/basetecnica',baseTecnicaRouter);
        this.express.use('/api/Dispositivo',dispositivoRouter);
        this.express.use('/api/usuario',usuarioRouter);
        this.express.use('/api/estado',estadoRouter);
        this.express.use('/api/modelo',modeloRouter),
        this.express.use('/api/auth',authRouter)
        this.express.use('/api/AllDevice',AllDeviceRouter)
    }
}

module.exports = new App().express;