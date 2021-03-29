const mongoose = require('mongoose');

const course_shcema = new mongoose.Schema({
    title : String,
    author : String,
    tags : [String],
    price : Number,
    date : {type : Date, default : Date.now()},
    isPublished : Boolean
});

const Course = mongoose.model('Course',course_shcema);

module.exports = Course