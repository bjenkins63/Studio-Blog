const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mysql2 = require('mysql2')

const db = require('./config/database')

db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

const app = express();

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.Options.urlencoded({ extended: false }));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

//blog routes
app.use('./blogs', require('./routes/blogs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));