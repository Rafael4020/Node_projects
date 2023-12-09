import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js'

const App = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

App.set('views', join(__dirname, 'views'))
App.set('view engine', 'ejs')
App.use(indexRoutes);

App.use(express.static(join(__dirname, 'public')));
App.listen(3000);





console.log('la aplicacion corre con express en el puerto', 3000);

