const db = require('../config/db');

const StudentModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM students', callback);
  },

  getByName: (name, callback) => {
    db.query('SELECT * FROM students WHERE name LIKE ?', [`%${name}%`], callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM students WHERE id = ?', [id], callback);
  },

  create: (student, callback) => {
    db.query('INSERT INTO students SET ?', student, callback);
  },

  update: (id, student, callback) => {
    db.query('UPDATE students SET ? WHERE id = ?', [student, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM students WHERE id = ?', [id], callback);
  }
};

module.exports = StudentModel;
