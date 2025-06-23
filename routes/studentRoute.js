
const express = require("express");
const router = express.Router();
const studentController = require("./../controller/studentController");

router.get('/',studentController.getAll);
router.get('/search/:name',studentController.searchByName);
router.get('/"id', studentController.getStudentById);
router.post("/", studentController.create);
router.put("/:id", studentController.update);
router.delete("/:id", studentController.delete);

module.exports = router;
