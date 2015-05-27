var builder = require('node-webkit-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');
var zip = require('gulp-zip');
var colors = require('colors');

gulp.task('install', function () {
    require('child_process').exec('npm install', {cwd: './app'}, function (err, stdout, stderr) {
        return true;
    });
});

gulp.task('nw', ['install'], function () {

    var nw = new builder({
        files: './app/**/**',
        platforms: ['win32', 'osx32', 'osx64', 'linux32', 'linux64']
    });

    nw.on('log', function (msg) {
        gutil.log('\'' + 'node-webkit-builder'.cyan + '\':', msg);
    });

    return nw.build().catch(function (err) {
        gutil.log('\'' + 'node-webkit-builder'.cyan + '\':', err);
    });
});

gulp.task('dist-win', ['nw'], function () {
    return gulp.src('build/rename-date/win32/**/**')
        .pipe(zip('Windows.zip'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('dist-osx32', ['nw'], function () {
    return gulp.src('build/rename-date/osx32/**/**')
        .pipe(zip('OSX32.zip'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('dist-osx64', ['nw'], function () {
    return gulp.src('build/rename-date/osx64/**/**')
        .pipe(zip('OSX64.zip'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('dist-linux32', ['nw'], function () {
    return gulp.src('build/rename-date/linux32/**/**')
        .pipe(zip('Linux32.zip'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('dist-linux64', ['nw'], function () {
    return gulp.src('build/rename-date/linux64/**/**')
        .pipe(zip('Linux64.zip'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['dist-win', 'dist-osx64', 'dist-osx32', 'dist-linux64', 'dist-linux32']);