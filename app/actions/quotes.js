'use strict';

var quotes = require('../data/quotes.json').quotes;

module.exports = {
    switchQuote: switchQuote
};

function switchQuote() {
    return (dispatch, getState) => {
        var quote = getState().currentQuote;
        while(quote.quote === getState().currentQuote.quote){
            quote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        dispatch(updateQuote(quote));
    }
}

function updateQuote(quote) {
    return {
        type: 'UPDATE_QUOTE',
        quote
    };
}