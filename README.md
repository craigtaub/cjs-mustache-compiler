# CJS Mustache Compiler

Simple solution for compiling mustache templates into a CommonJS Module

# Why?
To share same templates on server-side and client-side use (via browserify).

# How?
Builds them into pre-compiled templates.

# Usage:

# Build templates

Gulp:

    gulp.task('clean', function() {
        return del([paths.built, 'client/templates.js']);
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
    templates['first.mustache'];


# TODO

Clean usage so can use cjsmc as gulp-plugin (gulp-cjsmc). https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md

    return gulp.src('.')
      .pipe(cjsmc())
      .pipe(gulp.dest('client/templates'));
