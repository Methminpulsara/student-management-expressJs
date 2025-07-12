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
      student.id=null;
      if (err) return res.status(500).send(err);
      res.status(201).send({ id: result.insertId, ...student });
    });
  },

update: (req, res) => {
  const id = req.params.id;
  const data = req.body;

  studentService.updateStudent(id, data, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating student' });

    res.status(200).json({ message: 'Student updated successfully' });
  });
},

  delete: (req, res) => {
    const id = req.params.id;
    studentService.deleteStudent(id, (err) => {
      if (err) return res.status(500).send(err);
      res.status(200).json({ message: "Student deleted" });
    });
  }
};

module.exports = studentController;
