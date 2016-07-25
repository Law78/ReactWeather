var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;
    //debugger;
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, function(errorMessage){
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return(
          <h3 className="text-center">In attesa dei dati...</h3>
        );
      } else if(temp && location){
        return(
          <WeatherMessage location={location} temp={temp}/>
        );
      } else {

      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
