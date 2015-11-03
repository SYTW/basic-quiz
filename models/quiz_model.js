var AbstractQuiz = require('models/abstract_quiz_model');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },
    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\bIsabel\b/i).exec(x) && (/\bFernando\b/i).exec(x)) { return true; }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    },
    {
      pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x);
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
    }
  );
  /*
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      debug("n2 = "+n2);
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+"= ?",
          respuesta: function(x) {
            debug("n1 = "+n1);
            debug("n2 = "+n2);
            return (x == n1*n2);
        }
      })
    })();
  }
  */
  debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
