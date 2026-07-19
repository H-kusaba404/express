var createError = require('http-errors'); //⭐︎無くなっていたけど残しとく
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var bodyParser = require('body-parser');  //追記

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var notesRouter = require('./routes/notes');
var catRouter = require('./routes/cat');
var artRouter = require('./routes/art'); //レポート課題で作ったAPI部分
var notes_from_bRouter = require('./routes/notes_from_b'); //追記（第14回）

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/notes', notesRouter);
app.use('/cat',catRouter);
app.use('/art',artRouter); //レポート課題で作ったAPI部分
app.use('/notes_from_b', notes_from_bRouter); //追記（第14回）

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
