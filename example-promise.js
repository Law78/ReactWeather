// Questo file non ha nulla a che fare con il nostro progetto!!!
// http://callbackhell.com/
// Supponiamo di avere funzione asincrona (che simulo con setTimeout):
function downloadPhoto(url){
  console.log('download photo...')
  setTimeout(function(){
    console.log('...done.')
  },1000);
}
// Non posso fare questa assegnazione in maniera classica, perchè  sarà 'undefined'!
// Sarà valorizzata solo successivamente
var photo = downloadPhoto('http://coolcats.com/cat.gif')

console.log(photo); // undefined

// Devo salvare il risultato in una funzione detta di callback
function downloadPhotoNew(url, callback){
  setTimeout(function(){
    // Simulo un possibile errore
    var random = Math.floor(Math.random() * 6) + 1;
    if(random>2) return callback(null,{photo:'Questa è la photo'});
    return callback({err:'Ho generato un errore'},null);
  },1000);
}

function handlePhoto(error, photo){
  if(error) console.error('Download error: ', error);
  else console.log('Download effettuato', photo);
}

downloadPhotoNew('http://coolcats.com/cat.gif', handlePhoto)

// Dalla spiegazione del video corso
// Funzione asincrona per il fetch dei dati
function getDataCallback(data, callback){
  // Success
  callback(undefined, 30);
  // Error
  callback('Data not found');
}

// Ho una funzione di callback, definita nel secondo parametro responsabile di
// verificare se ho un successo o un errore (questo è un primo problema).
// Il secondo problema è che la funzione callback verrà richiamata 2 volte
getDataCallback('New York', function(err, data){
  if(err){
    console.log('error', err);
  } else {
    console.log('success', data);
  }
});

// Vediamo come risolvere con le PROMISE, imposto un BOILERPLATE:
function getBoilerplatePromise(data){
  return new Promise(function(resolve, reject){

  });
}

getBoilerplatePromise({campo:'Fake Request Data'}).then(function(result){}, function(err){});

// Vediamo un esempio.

function getDataPromise(data){
  return new Promise(function(resolve, reject){
    // Creo una attesa fake
    setTimeout(function(){
      // creo un risultato finto
      var result = {arr:[1,2,3]};
      resolve(result);
      reject('Data not found');
    }, 2000);
  });
}

getDataPromise({nome:'Lorenzo', cognome:'Franceschini'}).then(function(data){
  console.log('Promise Success: ', data);
}, function(err){
  console.log('Promise Error: ', err);
});

// Creo una Promise che fa la somma di due numeri. Uso il typeof variabile === 'number'

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    reject('Numeri non validi');
  });
}

addPromise(1, 12).then(function(result){
  console.log('success', result);
}, function(err){
  console.log('errre', err);
});

// Esempio di Andrew:

function getTempCallback(location, callback){

}
/*
Passo la location e la callback:

getTempCallback('Rome', function(){});

La funzione di callback prende due parametri: uno di errore e uno che rappresenta la
temperatura:

getTempCallback('Rome', function(err, temp))

a questo punto, all'interno della mia getTempCallback posso avere due casi:

function getTempCallback(location, callback){
  callback(undefined, 78); // Non ho l'errore e ho solo la temperatura
  callback('City not found'); // Ho solo l'errore
}

pertanto la mia funzione di callback sarà:
getTempCallback('Rome', function(){
  if(err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

In questo modo però ho una funzione di callback che è responsabile di gestire
entrambi i casi.
*/


function addOperationPromise(a ,b){
  return new Promise( function(resolve, reject){
  	setTimeout(function(){
	    if(typeof a === 'number' && typeof b === 'number'){
	      return resolve(a + b);
	    } else {
	      reject('Inserisci un numero');
	    }  		
  	}, 2000);

  });
}

addOperationPromise("b",4).then(function(data){
	console.log(data);
}, function(err){
	console.log(err);
});
