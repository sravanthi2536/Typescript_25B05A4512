
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Atlas connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true,
      min: 1
    },

    course: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// Model
const Student = mongoose.model("Student", studentSchema);

// =====================================================
// CREATE - Add a new student
// POST /students
// =====================================================

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// =====================================================
// READ - Get all students
// GET /students
// =====================================================

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// =====================================================
// READ - Get one student by ID
// GET /students/:id
// =====================================================

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      message: "Invalid student ID"
    });
  }
});

// =====================================================
// UPDATE - Update a student by ID
// PUT /students/:id
// =====================================================

app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// =====================================================
// DELETE - Delete a student by ID
// DELETE /students/:id
// =====================================================

app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid student ID"
    });
  }
});

// =====================================================
// Default route
// GET /
// =====================================================

app.get("/", (req, res) => {
  res.json({
    message: "Student API is running"
  });
});

// =====================================================
// Start server
// =====================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

