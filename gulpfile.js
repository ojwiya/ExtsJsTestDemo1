var gulp = require('gulp');
var Server = require('karma').Server;

var paths = {
  scripts: ['app/**/*.js', 'app-test/**/*.js']
};

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('dev', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['dev']);
});

gulp.task('default', ['dev']);
