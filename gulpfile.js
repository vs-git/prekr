
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    gulpWebpack = require("gulp-webpack"),
    webpack = require("webpack"),
    jsPath = 'app/**/**/*.js';

gulp.task('scripts', function(done) {
    console.time("Execution time");
    return gulp.src([jsPath])

        //.pipe(sourcemaps.init())

        /*.pipe(babel().on('error', function(error) {

            console.log( 'babel' );
            done(error);
        }))*/

        .pipe(gulpWebpack({
            entry: __dirname + '/app/main.js',
            plugins: [
                new webpack.optimize.UglifyJsPlugin()
            ],

            //watch: true,
            devtool: "source-map",
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
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

/*
        .pipe(concat('main.js').on('error', function(error) {

            console.log( 'concat(main.js)' );
            done(error);
        }))

        .pipe(gulp.dest('dist/js').on('error', function(error) {

            console.log( 'dest(dist/js)' );
            done(error);
        }))

        .pipe(rename({suffix: '.min'}).on('error', function(error) {

            console.log( 'rename' );
            done(error);
        })) */
        /*
        .pipe(uglify().on('error', function(error) {

            console.log( 'uglify' );
            done(error);
        }))

        .pipe(sourcemaps.write('.').on('error', function(error) {

            console.log( 'sourcemaps.write(.)' );
            done(error);
        }))*/

        .pipe(gulp.dest('dist/js').on('error', function(error) {

            console.log( 'dest(dist/js.min) error' );
            done(error);
        }))
        ;


});

gulp.task('watch', function() {
    gulp.watch([jsPath], ['scripts']);
});

/*
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    jsPath = 'app.js';

gulp.task('scripts', function(done) {
  return gulp.src([jsPath])

      .pipe(sourcemaps.init())

      .pipe(babel().on('error', function(error) {

          console.log( 'babel' );
          done(error);
      }))

      .pipe(concat('main.js').on('error', function(error) {

          console.log( 'concat(main.js)' );
          done(error);
      }))

      .pipe(gulp.dest('dist/js').on('error', function(error) {

          console.log( 'dest(dist/js)' );
          done(error);
      }))

      .pipe(rename({suffix: '.min'}).on('error', function(error) {

          console.log( 'rename' );
          done(error);
      }))

      .pipe(uglify().on('error', function(error) {

          console.log( 'uglify' );
          done(error);
      }))

      .pipe(sourcemaps.write('.').on('error', function(error) {

          console.log( 'sourcemaps.write(.)' );
          done(error);
      }))

      .pipe(gulp.dest('dist/js').on('error', function(error) {

          console.log( 'dest(dist/js.min)' );
          done(error);
      }))
	;

});


gulp.task('watch', function() {
    gulp.watch([jsPath], ['scripts']);
});*/

