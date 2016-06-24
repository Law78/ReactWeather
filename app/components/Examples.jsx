var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Example</h1>
      <p>Qui alcuni esempi da provare</p>
      <ol>
        <li>
          <Link to='/?location=Rome,it'>Rome, IT</Link>
        </li>
        <li>
          <Link to='/?location=Rio,brazil'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
