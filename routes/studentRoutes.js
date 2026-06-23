const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/students", studentController.getAllStudents);
router.get("/students/:id", studentController.getStudentById);
router.get("/search", studentController.searchStudents);
router.post("/students", studentController.addStudent);

module.exports = router;