// Importando el enrutador de express
import { Router } from 'express';
// Importando el gestor de rutas
import path from 'path';

//Importando ROOT_DIR
import {ROOT_DIR} from '../helpers/paths.js';


// Creando una instancia del enrutador de express
const router = Router();

//creando datos en la mmoria volatil
export const products = [];

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  res.sendFile(path.join(ROOT_DIR,'views','add-product.html'));
});

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;
