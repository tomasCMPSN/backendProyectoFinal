import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/turnos.routes';
import routerPacientes from './routes/pacientes.routes';
import routerUser from './routes/users.routes'
import './database'

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'../public')));

app.use('/apiveterinaria', router)
app.use('/apiveterinaria', routerPacientes);
app.use('/apiveterinaria', routerUser)