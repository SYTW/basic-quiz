* Se genera el esqueleto con [express-generator](http://expressjs.com/starter/generator.html)
* Añadimos `gulpfile.js`
* Usamos [nodemon](http://nodemon.io/) para ejecutar nuestra aplicación. Read the [full documentation](http://github.com/remy/nodemon#nodemon).
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
*  Cambiamos la página inicial
* Añadimos el favicon
