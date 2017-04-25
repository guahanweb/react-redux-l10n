'use strict';

const quotes = [
  { quote: 'greeting', cite: 'me' },
  { quote: 'quote-walt-disney', cite: 'Walt Disney' }
];

const initialState = {
  quote: quotes[0]
};

function cartApp(state = initialState, action) {
  switch (action.type) {
    case 'QUOTE_RANDOMIZE':
      return Object.assign({}, state, {
        quote: quotes[Math.floor(Math.random()*quotes.length)]
      });

    default:
      return state;
  }
}

module.exports = cartApp;
