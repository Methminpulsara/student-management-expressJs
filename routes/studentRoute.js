const express = require('express');
const router = express.Router();
const StudentController = require('../controller/studentController');

router.get('/', StudentController.getAll);
router.get('/search/:name', StudentController.searchByName);
router.get('/:id', StudentController.getById);
router.post('/', StudentController.create);
router.put('/:id', StudentController.update);
router.delete('/:id', StudentController.delete);

module.exports = router;
