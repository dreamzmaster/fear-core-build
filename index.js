'use strict';

/**
 * @module fear-core-build-tasks
 */
module.exports = {

    /**
     * file system tasks
     * @see module:tasks/javascript
     */
    fs : require('./tasks/fs'),

    /**
     * javascript tasks
     * @see module:tasks/javascript
     */
    javascript : require('./tasks/javascript'),

    /**
     * CSS tasks
     * @see module:tasks/css
     */
    css : require('./tasks/css'),

    /**
     * HTML tasks
     * @see module:tasks/html
     */
    html : require('./tasks/html'),

    /**
     * SASS tasks
     * @see module:tasks/sass
     */
    sass : require('./tasks/sass')
};
