'use strict';

//const label_style = 'color: #4ab; font-weight: bold';
//const timestamp_style = 'color: #aaa';

module.exports = (/*{dispatch, getState }*/) => {
    return (next) => {
        return (action) => {
            //console.info('%c[ACTION]%c(%s):%c State %o and action %o', label_style, timestamp_style, new Date(), 'color: #000', getState(), action);
            return next(action);
        };
    };
};
