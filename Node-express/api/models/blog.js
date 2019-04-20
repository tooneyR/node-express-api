const mongoose = require('mongoose');

//Schema for MongoDB
const blogSchema = mongoose.Schema({
    title: {type: String, required: true, max: 100},
    date: {type: Date, required: true},
    payload: {type: String, required: true}
});

//Object within module for export of code
module.exports = mongoose.model('Blog', blogSchema);