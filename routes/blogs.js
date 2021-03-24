const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Blog = require('../models/Blog');


//get blogs
router.get('/', (req, res) =>
    Blog.findAll()
        .then(blogs => res.render('blogs', {
        blogs
    }))
.catch(err => res.render('error', {error: err})));


//display form
router.get('add', (req, res) => res.render('add'));

//add blog
router.post('/add', (req, res) => {
    let { title, body } = req.body;
  
Blog.create({ title, body })
    .then(blog => res.redirect('/blogs'))
      .catch(err => res.render('error', {error:err.message}))
});


module.exports = router;