import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/Quote';

const Provider = require('react-redux').Provider;
const connect = require('react-redux').connect;
const QuoteAction = require('../../actions/quotes');

const createStore = require('../../create-store');
var store = createStore();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {
        quote: "",
        by: ""
      }
    };

    this.changeQuote();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="comp comp-app">
          <Quote quote={this.props.currentQuote.quote} by={this.props.currentQuote.by} />
          <br/>
          <button className="quoteButton" onClick={() => {this.changeQuote()}}>New Quote</button>
        </div>
      </Provider>
    );
  }
  changeQuote() {
    this.props.dispatch(QuoteAction.switchQuote());
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  store: React.PropTypes.object,
  quote: React.PropTypes.object
};

const ConnectedApp = connect((state) => {
  return {
    currentQuote: state.currentQuote
  };
})(App);

ReactDOM.render(React.createElement(ConnectedApp, { store }), document.getElementById('app'));
