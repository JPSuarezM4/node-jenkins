const { Router } = require('express');
const { createProyecto, getProyectos, updateProyecto } = require('../controllers/proyecto');

const router = Router();

// Crear
router.post('/', createProyecto);

// Editar
router.put('/:id', updateProyecto);

// Listar
router.get('/', getProyectos);

module.exports = router;
