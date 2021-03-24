const Sequelize = require('sequelize');
const db = require('../config/database');

const Blog = db.define('blog', {
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
})

Blog.sync().then(() => {
    console.log('table created');
});

module.exports.Blog;