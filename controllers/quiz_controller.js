var Quiz = require('../models/quiz_model');

var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
};

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.answer = function(req, res) {
  var c = 'incorrecto';
  debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'correcto'; }
  res.render('quizes/answer', {respuesta: c})
};
