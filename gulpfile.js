
var gulp = require('gulp'),
    gulpWebpack = require("gulp-webpack"),
    webpack = require("webpack"),
    jsPath = 'app/**/**/*.js';

gulp.task('scripts', function(done) {
    console.time("Execution time");
    return gulp.src([jsPath])

        .pipe(gulpWebpack({
            entry: './app/main.js',
            plugins: [
                //new webpack.optimize.UglifyJsPlugin()
            ],

            //watch: true,
            devtool: "source-map",
            include: /app/,
            module: {
                loaders: [
                    { test: /\.js$/, include: /app/, loader: 'babel-loader' }
                ]
            }/**/,
            output: {
                //path: __dirname + '/dist/js/',
                filename: "main.min.js"
            }
        }).on('error', function(error) {

            console.log( 'webpack error' );
            done(error);
        }), webpack)

        .pipe(gulp.dest('dist/js').on('error', function(error) {

            console.log( 'dest(dist/js.min) error' );
            done(error);
        }))
        ;


});

gulp.task('watch', function() {
    gulp.watch([jsPath], ['scripts']);
});


