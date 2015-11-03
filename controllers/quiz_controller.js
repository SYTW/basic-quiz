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
  var c = 'Incorrecto';
  debug(req.query);
  debug("current.respuesta(req.body.respuesta) = "+current.respuesta(req.body.respuesta));
  if (current.respuesta(req.body.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c})
};
