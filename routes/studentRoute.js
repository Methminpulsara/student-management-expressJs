const express = require('express');
const router = express.Router(); // ✅ This is the correct way

const studentController = require('../controller/studentController'); // adjust path as needed

router.get('/', studentController.getAll);
router.post('/', studentController.create);
router.get('/:id', studentController.getById);
router.get("/search/:name", studentController.searchByName);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

module.exports = router;
