/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import leaveRequestRouter from "./Routes/LeaveRequestRoutes.js";
import attendRoutes from "./Routes/AttendRoutes.js";
import dutySchedule from "./Routes/dutySchedule.js";
import SalaryAdd from "./Routes/SalaryRoutes.js";
import employeeRoutes from "./Routes/EmployeeRoutes.js";
import NewEmpRoutes from "./Routes/NewEmpRoutes.js";
import pdfRoutes from "./Routes/PdfRoutes.js";
import pdfSchema from "./Model/pdfModel.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/files", express.static("files"));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

 
// Handle authentication
app.post("/authenticate", async (req, res) => {
  const { email, managerId } = req.body;

  try {
    const employee = await User2.findOne({ gmail: email, Eid: managerId, jobRole: "Employee Manager" });

    if (employee) {
      res.json({ authenticated: true, navigateToManagerView: true });
    } else {
      res.json({ authenticated: false });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "An error occurred while authenticating" });
  }
});

// Routes
app.use("/leaverequest", leaveRequestRouter);
app.use("/attend", attendRoutes);
app.use("/schedule", dutySchedule);
app.use("/salaryAdd", SalaryAdd);
app.use("/Employeeadd", employeeRoutes);
app.use("/NewEmp", NewEmpRoutes);
app.use("/", pdfRoutes);

// Define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

// Initialize multer upload
const upload = multer({ storage });

// Handle file upload
app.post("/uplodefile", upload.single("file"), async (req, res) => {
  const title = req.body.title;
  const pdf = req.file.filename;

  try {
    await pdfSchema.create({ title: title, pdf: pdf });
    console.log("pdf Uploaded Successfully");
    res.send({ status: 200 });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Get list of uploaded files
app.get("/getFile", async (req, res) => {
  try {
    const data = await pdfSchema.find({});
    res.send({ status: 200, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Insert Model
import "./Model/employeeadd.js";

// Handle file upload
app.post("/Employeeadd", upload.single("Ps"), async (req, res) => {
  const { name, Eid, gender, age, phone, Email } = req.body;
  const Ps = req.file.filename;

  try {
    const Employee = mongoose.model("employeeadd");
    await Employee.create({ name, Eid, gender, age, phone, Email, Ps });
    console.log("Employee added successfully");
    res.status(200).send({ status: "success" });
  } catch (err) {
    console.error("Error adding employee:", err);
    res.status(500).send({ status: "error", message: err.message });
  }
});

//New Employee Function
import "./Model/NewEmpModel.js";
const User2 = mongoose.model("NewEmployee");
app.post("/NewEmp", async (req, res) => {
  const { name, gmail, jobRole, Eid } = req.body;
  try {
    await User2.create({
      name,
      gmail,
      jobRole,
      Eid,
    });
    res.send({ status: "ok" });
  } catch (err) {
    console.error("Error creating new employee:", err);
    res.send({ status: "err" });
  }
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/


/*
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import leaveRequestRouter from "./Routes/LeaveRequestRoutes.js";
import attendRoutes from "./Routes/AttendRoutes.js";
import dutySchedule from "./Routes/dutySchedule.js";
import SalaryAdd from "./Routes/SalaryRoutes.js";
import employeeRoutes from "./Routes/EmployeeRoutes.js";
import NewEmpRoutes from "./Routes/NewEmpRoutes.js";
import pdfRoutes from "./Routes/PdfRoutes.js";
import pdfSchema from "./Model/pdfModel.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/files", express.static("files"));

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/garagedb?retrywrites=true&w=majority";
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

 //------------------------------------------------------------------------
// Handle authentication
app.post("/authenticate", async (req, res) => {
  const { email, managerId } = req.body;

  try {
    const employee = await User2.findOne({ gmail: email, Eid: managerId, jobRole: "Employee Manager" });

    if (employee) {
      res.json({ authenticated: true, navigateToManagerView: true });
    } else {
      res.json({ authenticated: false });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "An error occurred while authenticating" });
  }
});

// Routes
app.use("/leaverequest", leaveRequestRouter);
app.use("/attend", attendRoutes);
app.use("/schedule", dutySchedule);
app.use("/salaryAdd", SalaryAdd);
app.use("/Employeeadd", employeeRoutes);
app.use("/NewEmp", NewEmpRoutes);
app.use("/", pdfRoutes);



// Define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

// Initialize multer upload
const upload = multer({ storage });

// Handle file upload
app.post("/uplodefile", upload.single("file"), async (req, res) => {
  const title = req.body.title;
  const pdf = req.file.filename;

  try {
    await pdfSchema.create({ title: title, pdf: pdf });
    console.log("pdf Uploaded Successfully");
    res.send({ status: 200 });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Get list of uploaded files
app.get("/getFile", async (req, res) => {
  try {
    const data = await pdfSchema.find({});
    res.send({ status: 200, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Insert Model
import "./Model/employeeadd.js";

// Handle file upload
app.post("/Employeeadd", upload.single("Ps"), async (req, res) => {
  const { name, Eid, gender, age, phone, Email } = req.body;
  const Ps = req.file.filename;

  try {
    const Employee = mongoose.model("employeeadd");
    await Employee.create({ name, Eid, gender, age, phone, Email, Ps });
    console.log("Employee added successfully");
    res.status(200).send({ status: "success" });
  } catch (err) {
    console.error("Error adding employee:", err);
    res.status(500).send({ status: "error", message: err.message });
  }
});

//New Employee Function
import "./Model/NewEmpModel.js";
const User2 = mongoose.model("NewEmployee");
app.post("/NewEmp", async (req, res) => {
  const { name, gmail, jobRole, Eid } = req.body;
  try {
    await User2.create({
      name,
      gmail,
      jobRole,
      Eid,
    });
    res.send({ status: "ok" });
  } catch (err) {
    console.error("Error creating new employee:", err);
    res.send({ status: "err" });
  }
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import leaveRequestRouter from "./Routes/LeaveRequestRoutes.js";
import attendRoutes from "./Routes/AttendRoutes.js";
import dutySchedule from "./Routes/dutySchedule.js";
import SalaryAdd from "./Routes/SalaryRoutes.js";
import employeeRoutes from "./Routes/EmployeeRoutes.js";
import NewEmpRoutes from "./Routes/NewEmpRoutes.js";
import pdfRoutes from "./Routes/PdfRoutes.js";
import pdfSchema from "./Model/pdfModel.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/files", express.static("files"));

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/garagedb?retrywrites=true&w=majority";
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

//------------------------------------------------------------------------
// Handle authentication
app.post("/authenticate", async (req, res) => {
  const { email, managerId } = req.body;

  try {
    const employee = await User2.findOne({ gmail: email, Eid: managerId, jobRole: "Employee Manager" });

    if (employee) {
      res.json({ authenticated: true, navigateToManagerView: true });
    } else {
      res.json({ authenticated: false });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "An error occurred while authenticating" });
  }
});

// Routes
app.use("/leaverequest", leaveRequestRouter);
app.use("/attend", attendRoutes);
app.use("/schedule", dutySchedule);
app.use("/salaryAdd", SalaryAdd);
app.use("/Employeeadd", employeeRoutes);
app.use("/NewEmp", NewEmpRoutes);
app.use("/", pdfRoutes);

// Define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

// Initialize multer upload
const upload = multer({ storage });

// Handle file upload
app.post("/uplodefile", upload.single("file"), async (req, res) => {
  const title = req.body.title;
  const pdf = req.file.filename;

  try {
    await pdfSchema.create({ title: title, pdf: pdf });
    console.log("pdf Uploaded Successfully");
    res.send({ status: 200 });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Get list of uploaded files
app.get("/getFile", async (req, res) => {
  try {
    const data = await pdfSchema.find({});
    res.send({ status: 200, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "error" });
  }
});

// Insert Model
import "./Model/employeeadd.js";

// Handle file upload
app.post("/Employeeadd", upload.single("Ps"), async (req, res) => {
  const { name, Eid, gender, age, phone, Email } = req.body;
  const Ps = req.file.filename;

  try {
    const Employee = mongoose.model("employeeadd");
    await Employee.create({ name, Eid, gender, age, phone, Email, Ps });
    console.log("Employee added successfully");
    res.status(200).send({ status: "success" });
  } catch (err) {
    console.error("Error adding employee:", err);
    res.status(500).send({ status: "error", message: err.message });
  }
});

//New Employee Function
import "./Model/NewEmpModel.js";
const User2 = mongoose.model("NewEmployee");
app.post("/NewEmp", async (req, res) => {
  const { name, gmail, jobRole, Eid } = req.body;
  try {
    await User2.create({
      name,
      gmail,
      jobRole,
      Eid,
    });
    res.send({ status: "ok" });
  } catch (err) {
    console.error("Error creating new employee:", err);
    res.send({ status: "err" });
  }
});

// Set dynamic port
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 




