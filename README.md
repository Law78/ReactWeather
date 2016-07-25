# ReactWather
A Simple React Wheater App hosted on Heroku

For watching change run with
```
webpack -w
```


Run Express server with:
```
node server
```

In index.html I've add those files:
```
<link rel="stylesheet" href="css/foundation/foundation.css" />
<link rel="stylesheet" href="css/foundation/app.css" />


</head>
<body>
<div id="app"></div>

<script src="js/bundle.js"></script>
<script src="js/foundation/vendor/jquery.js" ></script>
<script src="js/foundation/vendor/foundation.js" ></script>
<script src="js/foundation/app.js" ></script>



</body>
```
But it's better do it with webpack.

Installing Foundation inside Webpack (with jquery and all other tools):
```
npm install css-loader@0.23.1 script-loader@0.7.0 style-loader@0.13.1 jquery@2.2.2 foundation-sites@6.2.3 --save-dev

```
In webpack.config.js I'll do some change to load Foundation and jQuery. In my webpack.config.js I'll do:

```
// Necessario per il ProvidePlugin
var webpack = require('webpack');
...
entry: [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  './app/app.jsx'
],
// KEY-VALUE: key è il modulo e il value è la variabile che vogliamo rendere disponibile agli altri moduli esterni
externals:{
    jquery: 'jQuery'
},
// In questo modo ogni volta che nei miei componenti utilizzo $ o jQuery non devo importare il modulo di jQuery
plugins:[
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery'
  })
],
```
Il problema è che sono script non creati per NPM e quindi è queseto il motivo di utilizzare uno script loader, mettendo il suffisso script! Ora carico con lo style loader il css di foundation in app.jsx:
```
// Carico il css foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
```

I've add my custom CSS, so I've loaded it on my webpack (create an alias):
```
applicationStyle: 'app/styles/app.css'
```
then added it on my app.jsx:
```
require('style!css!applicationStyle');
```

I've added support for SASS - SCSS (it takes a lot of time to download!!!):
```
npm install sass-loader@4.0.0 node-sass@3.8.0 --save-dev
```

Rename my app.css to app.scss, then I update my alias on webpack.config.js with
the new extension scss. I need to modify my css also in app.jsx:
```
require('style!css!sass!applicationStyle');
```

Then restart webpack!
