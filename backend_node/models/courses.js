const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    course_id : {type : Number ,default : null},
    course_name : {type : String, default : null},
    course_link : {type : String, default : null},
    completion_status : {type : Number, default : null},
    
})

const courseCollectionSchema = new mongoose.Schema({
    courseList : [courseSchema]
})
