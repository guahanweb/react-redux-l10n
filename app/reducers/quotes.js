'use strict';
module.exports = (state = {
    quote: "To infinity and beyond!",
    by: "Buzz Lightyear"
}, action) => {
    switch (action.type) {
        case 'UPDATE_QUOTE':
            state = Object.assign({}, state, action.quote);
            return state;

        default:
            return state;
    }
};
