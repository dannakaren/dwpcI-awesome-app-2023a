// Importando Express
import express from 'express';
import httpStatus from 'http-status';

// Template Engine
import { engine } from 'express-handlebars';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

//importando root dir, primer middleware en ser registrado debe ser el servidor estatico
import { ROOT_DIR } from './helpers/paths.js';

//import { path } from 'express/lib/application.js';
import path from 'path';


// Creando la instancia de express
// que basicamente es un middleware
const app = express();


// Se crea instancia del template engine
const hbsTemplateEngine = engine({
  // Extensión de los archivos de plantillas
  extname: '.hbs',
  // Nombre del diseño por defecto
  defaultLayout: 'main',
});

// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));



// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

//Se registra el middleware para servidor archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));



// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);


//registrado middleware para el error
//app.use((req, res, next) => {
 // res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', 'error.html'));
//});


// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});


