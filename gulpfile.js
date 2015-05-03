var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    del = require('del'),
    karma = require('karma').server;

gulp.task('clean', function (callback) {
    del(['test/bundle/*.js'], callback);
});

gulp.task('karma', function (done) {
    return karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

// Browserify tests
gulp.task('testify', function () {
    return gulp.src('test/**/*.js')
        .pipe(browserify())
        .pipe(gulp.dest(__dirname + '/test/bundle'));
});

gulp.task('watch', function () {
    gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('test', function () {
    runSequence('clean', 'testify', 'karma');
});

gulp.task('default', function () {

});
