const React = require('react');

/*var About = React.createClass({
  render: function(){
    return(
      <div>
        <h3>About Component</h3>
      </div>

    );
  }
});*/

const About = () => {
  return(

    <div >
      <h3 className="text-center">About</h3>
      <p>Questa è una applicazione per prelevare il meteo da openweather, costruita con React.</p>
      <p>
        Qui alcuni degli strumenti che ho utilizzato:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li> - Questo è il framework javascript
          utilizzato.
        <li><a href="http://openweathermap.org">Open Weather Map</a></li> - Ho usato le API di
          Open Weather Map per ricerca il meteo di una città
      </ul>
    </div>


  );
};

module.exports = About;
