'use strict';

/**
 * @module tasks/css/minify
 */

/**
 * taskFactory
 * @param sources {Array} glob
 * @param destinations {Array} glob
 * @returns task {Function}
 */
module.exports = function taskFactory(sources, destinations) {

    return function task() {

        var gulp = require('gulp');
        var minifyCss = require('gulp-minify-css');
        var combiner = require('stream-combiner2');
        var destinationsHelper = require('../helpers/build-destinations');

        var minify = combiner.obj([
            gulp.src(sources),
            minifyCss(),
            gulp.dest(function (file) {
                return destinationsHelper.getDestinations(destinations, file.path);
            })
        ]);

        minify.on('error', console.error.bind(console));

        return minify;
    };
};
