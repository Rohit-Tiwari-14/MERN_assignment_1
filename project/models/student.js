

//import mongoose from 'mongoose';
const mongoose = require('mongoose');

//Connection

const connectDB =  () => {
    mongoose.connect("mongodb://localhost:27017/project")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });
}

//schema model
const studentSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email:{type:String,required:true,unique:true},
    course: {type:String,required:true},
    age: {type:Number,required:true},
    
},{timestamps:true});

const studentmodel = mongoose.model('student', studentSchema);
module.exports = { connectDB, studentmodel };