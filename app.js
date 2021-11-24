require('dotenv').config()
var express = require('express');
var path = require('path');
var logger = require('morgan');
// import mongo connect function
require('./models/setupMongo')();



// will complete users later
//var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
var themesRouter = require('./routes/themes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/themes', themesRouter)
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
