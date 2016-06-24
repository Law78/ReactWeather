// In questo modo accedo alle API di Express:
var express = require('express');

// Creo la mia App Express, ovvero ho una istanza di Express:
var app = express();
// La porta la prendo da process.env.PORT se esiste (necessario per HEROKU)
const PORT = process.env.PORT || 3000;

/*
**********************
****  MIDDLEWARE  ****
**********************
*/

// Openweather API usa solo l'HTTP e non l'HTTPS per cui devo fare il redirect di eventuali req https in http
app.use(function(req, res, next){
  // verifico l'header della richiesta
  // Per far si che funzioni con localhost fai il test se la connessione è https e non http altrimenti non funziona in locale
  // Questo perchè in localhost non ho l'x-forwarded-proto e quindi lo tratterei come fosse una comunicazione https
  if (req.headers['x-forwarded-proto'] === 'https'){
    // la connessione non è http, allora faccio in redirect in http
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    // la connessione è http, posso andare avanti con next() al prossimo middleware
    next();
  }
});

// Indichiamo la cartella che pubblichiamo. Con app.use aggiungo funzionalità alla mia App Express.
// con express.static indico una cartella, in questo caso public:
app.use(express.static('public'));

// Avvio il server:
app.listen(PORT, function(){
  console.log(`Express server is running on port ${PORT}`);
});
