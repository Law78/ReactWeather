var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  onSearch: function(e) {
    e.preventDefault(); // Evito il refresh del browser al click sul submit
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if(location && typeof location==='string'){
      this.refs.search.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render: function() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">



          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Ricerca il tempo..." />
              </li>
              <li>
                <input type="submit" className="button" value="Visualizza Tempo"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = Nav;

/*
<ul className="dropdown menu" data-dropdown-menu="">
  <li>
   <a href="#">One</a>
   <ul className="menu vertical">
     <li><a href="#">One</a></li>
     <li><a href="#">Two</a></li>
     <li><a href="#">Three</a></li>
   </ul>
  </li>
  <li><a href="#">Two</a></li>
  <li><a href="#">Three</a></li>
</ul>
*/
