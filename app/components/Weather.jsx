var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, function(e){
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
      //alert(errorMessage);
    });
  },
  updatedLocation: function(location){
    var location = location;
    if(location && typeof location === 'string'){
      this.handleSearch(location);
      // Faccio il reset della query string:
      window.location.hash = '#/';
    }
  },
  componentDidMount: function(){
    this.updatedLocation(this.props.location.query.location);
  },
  componentWillReceiveProps: function(newProps){
    this.updatedLocation(newProps.location.query.location);
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return(
          <h3 className="text-center">In attesa dei dati...</h3>
        );
      } else if(temp && location){
        return(
          <WeatherMessage location={location} temp={temp}/>
        );
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string' && errorMessage){
        return(
          <ErrorModal message={errorMessage} title="Error Fetching City"/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
