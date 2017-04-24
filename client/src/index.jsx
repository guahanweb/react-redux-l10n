import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';

import Cart from './components/Cart';
import ItemList from './components/ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ItemList />
          <Cart />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  store: PropTypes.object
};

const ConnectedApp = connect((state) => {
  return state;
})(App);

const createStore = require('./create-store');
let store = createStore();
ReactDOM.render(React.createElement(ConnectedApp, { store }), document.getElementById('app'));
