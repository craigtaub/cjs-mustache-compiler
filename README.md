# CJS Mustache Compiler [![npm version](https://badge.fury.io/js/cjsmc.svg)](https://badge.fury.io/js/cjsmc) [![Build Status](https://travis-ci.org/craigtaub/cjsmc.svg?branch=master)](https://travis-ci.org/craigtaub/cjsmc)

Simple solution for compiling Mustache templates into a CommonJS Module.
Now available as a 'gulp-plugin' at https://www.npmjs.com/package/gulp-cjsmc.

Example APP using it located https://github.com/craigtaub/cjsmc-example-app.

# Why?
To share same templates on server-side and client-side. Easily added to any bundle.

# How?
Builds them into pre-compiled templates. Accessible via keys as filename.

# Architecture requirements:
    views/

# Usage:

# Build templates

via Gulp (shell):

    gulp.task('clean', function() {
        return del(['client/templates.js']);
    });

    gulp.task('templates', ['clean'], function (cb) {
        return gulp.src('.')
            .pipe(shell([
                'node node_modules/cjsmc/lib/index.js >> client/templates.js'
            ]));
    });

OR gulp-plugin at https://www.npmjs.com/package/gulp-cjsmc

via NPM script:

    'node node_modules/cjsmc/lib/index.js >> client/templates.js'

# Use templates (from anywhere)

    var templates from './client/templates';

    var template = templates['first.mustache'];
    var viewData = { name: 'Your name' };

    var partialTemplate = templates['two.mustache'];
    var partial = { 'partials/two': partialTemplate }

    var markup = Mustache.render(
        template, viewData, partial
    );

# Run tests and linter

    npm run test
    npm run lint
