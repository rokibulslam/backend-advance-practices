const StudentModel=require('../models/StudentModel')
// Insert Data
exports.InsertStudent = (req, res) => {
    let studentData = req.body;
    StudentModel.create(studentData, (err, data) => {
        if (err) {
            res.status(400).json({status:'fail', data:err})
        } else {
            res.status(201).json({status:'success', data:data})
        }
    })
}
// Read
exports.ReadStudent = (req, res) =>{
    let query = {};
    let projection = "Name Roll Class Reamarks";
    StudentModel.find(query, projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(201).json({ status: "success", data: data });
        }
    })
}
// Update
exports.UpdateStudent = (req, res) => {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    StudentModel.updateOne(query, reqBody, (err, data) => {
        if (err) {
          res.status(400).json({ status: "fail", data: err });
        } else {
          res.status(201).json({ status: "success", data: data });
        }
    })
}
// Delete
exports.DeleteStudent = (req, res) => {
    let id = req.params.id;
    let query = { _id: id };
    
    StudentModel.remove(query, (err, data) => {
        if (err) {
          res.status(400).json({ status: "fail", data: err });
        } else {
          res.status(201).json({ status: "success", data: data });
        }
    })
}