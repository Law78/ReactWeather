var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ed06b665d6856e09ad21c16e8fae539d&units=metric';

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ed06b665d6856e09ad21c16e8fae539d&units=metric

// http://api.openweathermap.org/data/2.5/weather?appid=ed06b665d6856e09ad21c16e8fae539d&units=metric

// ed06b665d6856e09ad21c16e8fae539d

module.exports = {
  // Prende una location è ritorna (tramite una Promise) una temperature
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    //console.log(`REQUEST1: ${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`);
    //console.log(`REQUEST2: ${OPEN_WEATHER_MAP_URL}&q=${location}`);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      //debugger;
      if(response.data.cod && response.data.message){
        console.log('res err: ', response.data.message);
        throw new Error(response.data.message);
      } else {
        console.log('res: ',response.data.main.temp);
        return response.data.main.temp;
      }
    }, function(error){
      console.log('errore: ', error);
      throw new Error(error.data.message);
    });
  }
}
