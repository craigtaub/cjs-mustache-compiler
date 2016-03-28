# CJS Mustache Compiler

Simple solution for compiling mustache templates into a CommonJS Module

# Why?
For server-side or (via browserify) client-side use.
To share.

# How?
Builds them into pre-compiled templates.

# Usage

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

# TODO

Clean usage so can use cjsmc as gulp-plugin (gulp-cjsmc). https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md

    return gulp.src('.')
      .pipe(cjsmc())
      .pipe(gulp.dest('client/templates'));
