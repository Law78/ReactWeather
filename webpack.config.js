module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  resolve: {
    // __dirname è una variabile disponibile nell'ambiente nodejs
    root: __dirname,
    // definisco un oggetto alias, in cui inserisco il path (dalla root) dei miei componenti
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap'
    },
    // In questo modo mi evito di specificare l'estensione nei require ;)
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        loader:'babel-loader', // nome del loaders
        query: {
          presets: ['react', 'es2015'] // faccio il parse dei file con questi due presets
        },
        // con test indico cosa vado a prendere a cui faccio il parser
        // con il doppio // apro la regular expression, poi faccio l'escape del . con \. e metto l'estensione jsx ed infine $ per l'end del file
        // il punto interrogativo fa si che cerco sia i file js che jsx (rendono la x opzionale)
        test: /\.jsx?$/,
        // indico le cartelle da escludere, includo anche quella di bower che userò successivamente
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // Crea il source map per fare debugging
  devtool: 'cheap-module-eval-source-map'
};
