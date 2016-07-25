var React = require('react');

var WeatherForm = React.createClass({
  propTypes:{
    onSearch: React.PropTypes.func.isRequired
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Inserisci la città" ref="location"/>
          <button className="button expanded hollow" type="submit">Visualizza Tempo</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
