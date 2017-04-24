'use strict';

module.exports = ({ dispatch, getState }) => {
    return (next) => {
        return (action) => {
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action);
        };
    };
};
