const express = require('express');
const HelloControler=require("../controllers/HelloController")
const router = express.Router();
const studentController=require("../controllers/studentsControllers")

// express core
router.get("/hello-get", HelloControler.HelloGet)
router.post("/hello-post", HelloControler.HelloPost);
// mongoose
router.post("/insertStudent", studentController.InsertStudent);
router.get("/readStudent", studentController.ReadStudent);
router.put("/updateStudent/:id", studentController.UpdateStudent);
router.delete("/deleteStudent/:id", studentController.DeleteStudent);

module.exports = router;