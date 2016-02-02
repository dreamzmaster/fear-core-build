'use strict';

/**
 * @module tasks/css/inline
 */

/**
 * taskFactory
 * @param sources {Array} glob
 * @param destinations {Array} glob
 * @returns task {Function}
 */
module.exports = function taskFactory (sources, destinations) {

    return function task () {

        var gulp = require('gulp');
        var inlineSource = require('gulp-inline-source');
        var combiner = require('stream-combiner2');
        var destinationsHelper = require('../helpers/build-destinations');

        var inlineSrcOpts = {
            'swallowErrors': false
        };

        var compile = combiner.obj([
            gulp.src(sources),
            inlineSource(inlineSrcOpts),
            gulp.dest(function (file) {
                return destinationsHelper.getDestinations(destinations, file.path);
            })
        ]);

        return compile;
    };
};
