let students = require("../data/students");


exports.getAllStudents = (req, res) => {
    res.json(students);
};
exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};


exports.searchStudents = (req, res) => {
    const name = req.query.name || "";

    const result = students.filter(s =>
        s.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
};


exports.addStudent = (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        department: req.body.department
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
};