'use strict';

/**
 * @module tasks/javascript/minify
 */

/**
 * taskFactory
 * @param sources {Array} glob
 * @param destinations {Array} glob
 * @returns {Function}
 * gulp stream
 */
module.exports = function taskFactory(toMinify, destinations) {

    return function task() {

        var gulp = require('gulp');
        var uglify = require('gulp-uglify');
        var combiner = require('stream-combiner2');
        var destinationsHelper = require('../helpers/build-destinations');

        var minify = combiner.obj([
            gulp.src(toMinify),
            uglify({
                mangle: true
            }),
            gulp.dest(function (file) {
                return destinationsHelper.getDestinations(destinations, file.path);
            })
        ]);

        minify.on('error', console.error.bind(console));

        return minify;
    };
};
