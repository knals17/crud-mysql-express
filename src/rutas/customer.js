const express = require('express');
const router = express.Router();
const controller = require('../controladores/customerController');

router.get('/',controller.list);
router.post('/add',controller.guardar);
router.get('/delete/:id',controller.borrar);
router.get('/update/:id',controller.editar);
router.post('/update/:id',controller.actualizar);

module.exports = router;