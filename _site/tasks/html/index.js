'use strict';

/**
 * @module tasks/html
 */
module.exports = {

    /**
     * minify HTML
     * @see module:tasks/html/minify
     */
    minify: require('./minify'),

    /**
     * remove HTML blocks
     * @see module:tasks/html/remove
     */
    remove: require('./remove')
};
