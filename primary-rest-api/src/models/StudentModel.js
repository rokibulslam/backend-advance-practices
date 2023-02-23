// Create Schema with Mongoose.Shcema
// Convert dataschem to model(collection name, Shcema name)

const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks:String,
})

const StudentModel = mongoose.model('students', DataSchema);

module.exports = StudentModel;
