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
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Inserisci la città" className="form-control" ref="location"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Visualizza Tempo</button>
          </span>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
