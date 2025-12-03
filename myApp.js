const express = require('express');
const helmet = require('helmet');
const app = express();

//Actividad 2 de 14:
app.use(helmet.hidePoweredBy());

//Actividad 3 de 14:
app.use(helmet.frameguard({action: 'deny'}));

//Actividad 4 de 14:
app.use(helmet.xssFilter());

//Actividad 5 de 14:
app.use(helmet.noSniff());

//Actividad 6 de 14:
app.use(helmet.ieNoOpen());

//Actividad 7 de 14:
const timeInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));

//Actividad 8 de 14:
app.use(helmet.dnsPrefetchControl());

//Actividad 9 de 14:
app.use(helmet.noCache());

//Actividad 10 de 14:
app.use(
  helmet.contentSecurityPolicy({directives: 
    {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com'],
    }
  })
);

//Actividad 11 de 14:


//Actividad 12 de 14:


//Actividad 13 de 14:


//Actividad 14 de 14:





module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🥦 Useful programmer Info Security App Started on Port ${port}`);
});


