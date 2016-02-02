'use strict';

/**
 * @module tasks/sass/compile
 */

/**
 * taskFactory
 * @param files {Object}
 * @param autoPrefixOptions
 * @param destinations
 * @param includePaths
 * @returns task {Function}
 */
module.exports = function taskFactory(files, autoPrefixOptions, destinations, includePaths) {

    return function compile() {

        var gulp = require('gulp');
        var sass = require('gulp-sass');
        var sourceMaps = require('gulp-sourcemaps');
        var postCss = require('gulp-postcss');
        var autoPrefixer = require('autoprefixer');
        var combiner = require('stream-combiner2');
        var destinationsHelper = require('../helpers/build-destinations');

        var sassOptions = {
            includePaths: includePaths || [],
            outputStyle: 'expanded',
            sourceComments: true,
            errLogToConsole: true
        };

        var compile = combiner.obj([
            gulp.src(files),
            sourceMaps.init(),
            sass(sassOptions),
            postCss([autoPrefixer(autoPrefixOptions)]),
            sourceMaps.write('.'),
            gulp.dest(function (file) {
                return destinationsHelper.getDestinations(destinations, file.path);
            })
        ]);

        compile.on('error', console.error.bind(console));

        return compile;
    };
};
