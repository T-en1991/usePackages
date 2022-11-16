'use strict';
var {src,dest,series,watch} = require('gulp');//引入gulp的api


// region 压缩js
var uglify = require('gulp-uglify');
function script(cb){
  src('js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
  cb()
}
// endregion

// region 压缩css
var minifyCSS = require('gulp-minify-css');
function css(cb){
  src('css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
// endregion

// region 压缩图片
var imagemin = require('gulp-imagemin');
function images(cb){
  src('images/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(dest('dist/images'))
  cb()
}
// endregion

// region 编译less为css，并且压缩
var lessmin = require('gulp-less');
function less(cb){
  src('less/*.less')
    .pipe(lessmin())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
// endregion

// region 编译sass为css，并且压缩
var sassmin =  require('gulp-sass')(require('sass'));
function sass(cb){
  src('sass/*.scss')
    .pipe(sassmin())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
// endregion

// region 监听代码
function watcher(cb){
  watch('js/*.js',script)
  watch('css/*.css',css)
  watch('images/*.*',images)
  watch('less/*.less',less)
  watch('sass/*.scss',sass)
  cb()
}
// endregion

exports.watcher=watcher
exports.default=series(script,css,images,less,sass)
