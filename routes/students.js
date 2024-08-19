var express = require('express');
var router = express.Router();

// Importamos el controlador
var studentsController = require("../controllers/students.c");

// Ruta para listar todos los estudiantes
router.get('/', function (req, res, next) {
  studentsController.listar()
    .then((resultados) => {
      res.send(resultados);
    })
    .catch(next); // Añadir manejo de errores
});

// Ruta para crear un nuevo estudiante
router.post('/', async (req, res, next) => {
  try {
    // Crear un nuevo estudiante
    await studentsController.crear(req.body);

    // Listar todos los estudiantes después de la creación
    const resultados = await studentsController.listar();

    // Enviar la lista completa de estudiantes como respuesta
    res.status(201).json(resultados);
  } catch (error) {
   
    next(error);
  }
});

// Ruta para obtener un estudiante específico por ID
router.get('/:id', async (req, res, next) => {
  try {
  const student = await studentsController.uno(req.params.id);
  res.json(student);
  } catch (error) {
    res.status(404).send(error.message)
  }
   

});

// Ruta para actualizar un estudiante específico por ID
router.put('/:id', async (req, res, next) => {
  try {
      const updatedStudent = await studentsController.editar(req.params.id, req.body);
      res.json(updatedStudent);
  } catch (error) {
      res.status(404).send('Error al actualizar el estudiante');
  }
});

// Ruta para eliminar un estudiante específico por ID
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedStudent = await studentsController.eliminar(req.params.id);
    res.json(deletedStudent);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
