var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//     return(
//       <div>
//         <p>La temperatura di <b>{location}</b> è {temp}</p>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h3 className="text-center">La temperatura di <b>{location}</b> è {temp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
