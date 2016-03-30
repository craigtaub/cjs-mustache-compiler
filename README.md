# CJS Mustache Compiler [![npm version](https://badge.fury.io/js/cjsmc.svg)](https://badge.fury.io/js/cjsmc)

Simple solution for compiling Mustache templates into a CommonJS Module.

Example APP using it located https://github.com/craigtaub/cjsmc-example-app
Shares compiled templates.

# Why?
To share same templates on server-side and client-side use (via browserify).

# How?
Builds them into pre-compiled templates.

# Architecture requirements:
    views/
    
# Usage:

# Build templates

Gulp:

    gulp.task('clean', function() {
        return del(['client/templates.js']);
    });

    gulp.task('templates', ['clean'], function (cb) {
        return gulp.src('.')
            .pipe(shell([
                'node node_modules/cjsmc/lib/index.js >> client/templates.js'
            ]));
    });

NPM script:

    'node node_modules/cjsmc/lib/index.js >> client/templates.js'

# Use templates

    var templates from './client/templates';
    var myFirstTemplate = templates['first.mustache'];


# TODO

Clean usage so can use cjsmc as gulp-plugin (gulp-cjsmc). https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md

    return gulp.src('.')
      .pipe(cjsmc())
      .pipe(gulp.dest('client/templates'));
