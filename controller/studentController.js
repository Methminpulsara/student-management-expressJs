const studentService = require("../service/studentService");

const studentController = {
  getAll: (req, res) => {
    studentService.getAllStudents((err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  },

  searchByName: (req, res) => {
    const name = req.params.name;
    studentService.searchStudentsByName(name, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    studentService.getStudentById(id, (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0) return res.status(404).send('Student not found');
      res.json(results[0]);
    });
  },

  create: (req, res) => {
    const student = req.body;
    studentService.createStudent(student, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ id: result.insertId, ...student });
    });
  },

  update: (req, res) => {
    const id = req.params.id;
    const student = req.body;
    studentService.updateStudent(id, student, (err) => {
      if (err) return res.status(500).send(err);
      res.send('Student updated');
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    studentService.deleteStudent(id, (err) => {
      if (err) return res.status(500).send(err);
      res.send('Student deleted');
    });
  }
};

module.exports = studentController;
