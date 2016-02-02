'use strict';

/**
 * @module tasks/javascript/annotate
 */

/**
 * taskFactory
 * @param sources {Array} glob
 * @param destinations {Array} glob
 * @returns {Function}
 * gulp stream
 */
module.exports = function taskFactory(toAnnotate, destinations) {

    return function task() {

        var gulp = require('gulp');
        var combiner = require('stream-combiner2');
        var ngAnnotate = require('gulp-ng-annotate');
        var destinationsHelper = require('../helpers/build-destinations');

        var annotate = combiner.obj([
            gulp.src(toAnnotate),
            ngAnnotate({
                add: true,
                single_quotes: true // eslint-disable-line camelcase
            }),
            gulp.dest(function (file) {
                return destinationsHelper.getDestinations(destinations, file.path);
            })
        ]);

        annotate.on('error', console.error.bind(console));

        return annotate;
    };
};
