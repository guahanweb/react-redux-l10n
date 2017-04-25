import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';

import Dashboard from './components/Dashboard';
import LanguagePicker from './components/LanguagePicker';
import QuoteReset from './components/QuoteReset';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <LanguagePicker />
          <Dashboard />
          <QuoteReset />
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

import createStore from './stores/redux';
let store = createStore();

// load default strings
import TranslationStore from './stores/TranslationStore';
TranslationStore.setAvailableLanguages([
  { code: 'en-US', name: 'US English' },
  { code: 'xx-XX', name: 'Test Locale' }
]);

fetch('l10n/en-US.json')
  .then(response => response.json())
  .then(function (json) {
    TranslationStore.setLanguage('en-US', json);
    ReactDOM.render(React.createElement(ConnectedApp, { store }), document.getElementById('app'));
  });
