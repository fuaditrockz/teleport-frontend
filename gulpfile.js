var path = require('path');
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [                 
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

// copy styles from app to dist
gulp.task('style',function(cb){
  return gulp.src(app + 'styles/*.css')
    .pipe($.size({ title : 'css' }))
    .pipe(gulp.dest(dist + 'styles/'));
});

// copy js from app to dist
gulp.task('script',function(cb){
  return gulp.src(app + 'script/**/*.{js,json}')
    .pipe($.size({ title : 'js' }))
    .pipe(gulp.dest(dist + 'script/'));
});

// copy font from app to dist
gulp.task('fonts',function(cb){
  return gulp.src(app + 'fonts/*.{eot,svg,ttf,woff,otf,woff2}')
    .pipe(gulp.dest(dist + 'fonts/'));
});


gulp.task('styles',function(cb) {

  // convert less to css
  return gulp.src(app + 'less/main.less')
    .pipe($.less({
      // only compress if we are in production
      compress: isProduction,
      // include 'normal' css into main.css
      'include css' : true
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers})) 
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());

});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'images/'));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/*.styl', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
  gulp.watch(app + 'script/**/*.{js,json}', ['script']);
  gulp.watch(app + 'style/*.css', ['style']);
  gulp.watch(app + 'fonts/*.{eot,svg,ttf,woff,otf,woff2}', ['fonts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  return del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['images', 'html','scripts', 'styles', 'serve', 'watch', 'style', 'script', 'fonts']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images', 'html','scripts','styles', 'style', 'script', 'fonts']);
});