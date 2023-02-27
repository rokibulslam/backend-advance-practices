// Create Schema with Mongoose.Shcema
// Convert dataschem to model(collection name, Shcema name)

const mongoose = require('mongoose')

const DataSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Roll: { type: Number },
    Class: { type: String },
    Remarks: { type: String, default: "No Remarks" },
  },
  { versionKey: false }
);

const StudentModel = mongoose.model('students', DataSchema);

module.exports = StudentModel;
