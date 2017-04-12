const Redux = require('redux');

const finalCreateStore = Redux.applyMiddleware(
    require('./middleware/console-middleware'),
    require('./middleware/thunk-middleware')
)(Redux.createStore);

// import and apply reducers here
//
const reducer = Redux.combineReducers({
    currentQuote: require('./reducers/quotes')
});

module.exports = () => {
    let store = finalCreateStore(reducer);
    window.globalstore = store;
    return store;
};
