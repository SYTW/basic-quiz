##  Referencias

* [Módulo VI: El proyecto Quiz y MVC](https://github.com/crguezl/miriada-upm-dsnh5jsnode#módulo-vi-el-proyecto-quiz-y-mvc) Videos
* [Módulo VI: El proyecto Quiz y MVC](https://github.com/crguezl/miriada-upm-dsnh5jsnode/blob/master/traspas/transp_modulo6.pdf) Trasparencias en PDF
* [Repo crguezl/miriada-upm-dsnh5jsnode](https://github.com/crguezl/miriada-upm-dsnh5jsnode)
* [Curso MOOC Node.JS: El Proyecto Quiz y MVC](https://youtu.be/HSuOf0204HM)

## Esqueleto
* Se genera el esqueleto con [express-generator](http://expressjs.com/starter/generator.html)
* Añadimos `gulpfile.js`
* [Curso MOOC Node.JS: Esqueleto del proyecto con express-generador](https://youtu.be/CxtSbqZ07go)
* [Curso MOOC Node.JS: Quiz 1B. Esqueleto del proyecto](https://youtu.be/4Rcgd08QQJs)

## Ejecución

* Usamos [nodemon](http://nodemon.io/) para ejecutar nuestra aplicación en fase de desarrollo. Read the [full documentation](http://github.com/remy/nodemon#nodemon).

En fase de producción usamos `node`.

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

* [Curso MOOC Node.JS: Quiz 2. Primera página y favicon](https://youtu.be/LG7xOeF0UNQ)

## Añadimos el favicon

* [Curso MOOC Node.JS: Quiz 2. Primera página y favicon](https://youtu.be/LG7xOeF0UNQ)


###  Nota: Refresh favicon the simple way

See [http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php](http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php):

I found a very simple way to update the favicon that works in FireFox, Internet Explorer, Chrome, Opera and probably in other browsers too. Just follow these easy steps:

* Start your favorite browser.
* Open the `favicon.ico` file directly, for example http://localhost:3000/favicon.ico
* Refresh the favico.ico URL by pressing F5 or the appropriate browser Refresh (Reload) button
* Close the browser and open your website - voila, your favicon has been updated!

## Primera pregunta. Controlador y Nuevas Vistas

* [Curso MOOC Node.JS: Quiz 3. Primera pregunta](https://youtu.be/DnylqFbaS1g)

## Muchas preguntas. El Modelo. Modelo basado en una clase JavaScript. Sin base de datos

Esta parte no se documenta en los vídeos y trasparencias.
Véase el directorio `models`y los ficheros `quiz_model.js` y
`abstract_quiz_model.js`

* [quiz_model.js](https://github.com/crguezl/basic-quiz/blob/master/models/quiz_model.js)
* [abstract_quiz_model](https://github.com/crguezl/basic-quiz/blob/master/models/abstract_quiz_model.js)

## Añadimos Layouts

* [Curso MOOC Node.JS: Quiz 4. Marco de la aplicación](https://youtu.be/oSTXsqSoLTc)
* [express-partials](https://github.com/publicclass/express-partials)

## Despliegue en [iaas.ull.es](iaas.ull.es)

* Véase el repo [SYTW/iaas.ull.es](https://github.com/SYTW/iaas-ull-es)

## Despliegue en Heroku

* [Curso MOOC Node.JS: Quiz 6: Despliegue en Heroku](https://youtu.be/pHrxmgE1-eM)
* El tutorial [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app) del propio Heroku
* Tuve problemas en Heroku con los `require`que no encontraban los módulos.
  Resuelto con `heroku config:set NODE_PATH=":."`
  Véase [Setting up config vars for a deployed application](https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application)
* Si la aplicación no funciona en Heroku  vale la pena leer
[Recovering an Offline Application](https://devcenter.heroku.com/articles/application-offline). Pueden ayudar comandos como:

                        heroku ps
                        heroku logs --tail
                        heroku restart
o usar `curl`ne modo verbose:
                         curl -v http://example.herokuapp.com/                        


## No se incluyen en esta práctica los siguientes requisitos:

* [Curso MOOC Node.JS: Quiz 5. CSS adaptable a móviles](https://youtu.be/fFvFm9WXcI0)
