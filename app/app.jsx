var React = require('react');
var ReactDOM = require('react-dom');
// Specifico le proprietà che mi interessano dell'oggetto e mi vengono create automaticamente le variabili
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Miei componenti:
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app'));
