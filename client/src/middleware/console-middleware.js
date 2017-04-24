'use strict';

module.exports = () => {
    return (next) => {
        return (action) => {
            return next(action);
        };
    };
};
