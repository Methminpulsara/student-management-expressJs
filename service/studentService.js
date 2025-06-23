const StudentModel = require('../models/student');

const StudentService = {
  getAllStudents: (cb) => StudentModel.getAll(cb),

  searchStudentsByName: (name, cb) => StudentModel.getByName(name, cb),

  getStudentById: (id, cb) => StudentModel.getById(id, cb),

  createStudent: (student, cb) => StudentModel.create(student, cb),

  updateStudent: (id, student, cb) => StudentModel.update(id, student, cb),

  deleteStudent: (id, cb) => StudentModel.delete(id, cb),
};

module.exports = StudentService;
