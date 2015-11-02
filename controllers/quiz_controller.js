function randomInt(x) {
  return Math.floor(Math.random()*x);
}

function Quiz() {
  var q = [
    /*
    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    }, */
    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\bIsabel\b/i).exec(x) && (/\bFernando\b/i).exec(x)) { return true; }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      }
    }
  ];
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  for(var i = 0; i<0;i++) {
    (function() {
      var n1 = randomInt(9)+1;
      debug(n1);
      var n2 = randomInt(9)+1;
      debug(n2);
      q.push(
        { pregunta: n1+'x'+n2+"=",
          respuesta: function(x) {
            debug("n1 = "+n1);
            debug("n2 = "+n2);
            return (x == n1*n2);
        }
      })
    })();
  }

  debug(q);
  return q;
}

var q = Quiz();

function randomQuestion() {
  var index = randomInt(q.length);
  return q[index];
}

var current = randomQuestion();

exports.index = function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
};

exports.question = function(req,res) {
  current = randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.answer = function(req, res) {
  var c = 'incorrecto';
  debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'correcto'; }
  res.render('quizes/answer', {respuesta: c})
};
