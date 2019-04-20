const express = require('express');
// routes allows to register different routes
const router = express.Router();
const mongoose = require('mongoose');

const Blog = require('../models/blog');


router.get('/', (req, res, next) => {
    Blog.find()
        .exec()
        .then(docs =>{
            res.status(200).json(docs);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error :err
            });
        })
});

router.get('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    Blog.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

router.post('/', (req, res, next) => {
    const blog = new Blog({
        title: req.body.title,
        date: new Date(req.body.date), //yyyy-MM-dd
        payload: req.body.payload
    });
    blog.save().then(result => {
            console.log(result);
    });
    res.status(200).json({
        message: "Handling POST requests to /blog" ,
        createdBlog: blog
    });
});

//Object within module for export of code
module.exports = router;