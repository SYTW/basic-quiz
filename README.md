##  Referencias

* [Módulo VI: El proyecto Quiz y MVC](https://github.com/crguezl/miriada-upm-dsnh5jsnode#módulo-vi-el-proyecto-quiz-y-mvc) Videos
* [Módulo VI: El proyecto Quiz y MVC](https://github.com/crguezl/miriada-upm-dsnh5jsnode/blob/master/traspas/transp_modulo6.pdf) Trasparencias en PDF
* [Repo crguezl/miriada-upm-dsnh5jsnode](https://github.com/crguezl/miriada-upm-dsnh5jsnode)

## Esqueleto
* Se genera el esqueleto con [express-generator](http://expressjs.com/starter/generator.html)
* Añadimos `gulpfile.js`

## Ejecución

* Usamos [nodemon](http://nodemon.io/) para ejecutar nuestra aplicación. Read the [full documentation](http://github.com/remy/nodemon#nodemon).

## Depuración

* Depuramos/logging con [debug](http://expressjs.com/guide/debugging.html).  
<br/>
  En el fichero `bin/www`:

                    var debug = require('debug')('quiz:server');
<br/>
  y luego en el código:

                      debug("En users.js: ruta '/'");
<br/>
  You can specify more than one debug namespace by assigning a comma separated list of names, as shown below.

                      $ DEBUG=http,mail,express:* node index.js
<br/>

## Cambiamos la página inicial

## Añadimos el favicon

###  Refresh favicon the simple way

See [http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php](http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php):

I found a very simple way to update the favicon that works in FireFox, Internet Explorer, Chrome, Opera and probably in other browsers too. Just follow these easy steps:

* Start your favorite browser.
* Open the `favicon.ico` file directly, for example http://localhost:3000/favicon.ico
* Refresh the favico.ico URL by pressing F5 or the appropriate browser Refresh (Reload) button
* Close the browser and open your website - voila, your favicon has been updated!

## Primera pregunta

## Muchas preguntas (Modelo basado en una clase. Sin base de datos)
Esta parte no se documenta en los vídeos y trasparencias.
Véase el directorio `models`y los fichero `quiz_model.js` y
`abstract_quiz_model.js`

## Añadimos Layouts
