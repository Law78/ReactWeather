const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p><button className="button hollow" data-close="">
          Okay
        </button></p>
      </div>
    );
    // Mi creo il mio componente HTML grazie a renderToString. Lo genero sul server.
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // Cerco il nodo, ovvero this il componente! A questo aggiungo il componente
    // $modal con html():
    $(ReactDOM.findDOMNode(this)).html($modal);
    
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){

    return(
      <div>

      </div>
    );
  }
});

module.exports = ErrorModal;
