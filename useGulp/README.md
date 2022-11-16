简介：
gulp 是基于 node 实现 Web 前端自动化开发的工具，利用它能够极大的提高开发效率。
在 Web 前端开发工作中有很多“重复工作”，比如压缩CSS/JS文件。而这些工作都是有规律的。找到这些规律，并编写 gulp 配置代码,让 gulp 自动执行这些“重复工作”。
[官网地址](https://www.gulpjs.com.cn/)
### 一、包的安装和引用
```
// 安装 gulp 命令行工具
npm install --global gulp-cli

// 包的下载
npm install --save-dev gulp

// 检查 gulp 版本
gulp --version

```
### 二、gulp的常用api
#### 2.1 gulp.src()
创建一个流，用于从文件系统读取 Vinyl 对象。（其实就是读取文件）

```
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'));
}

exports.copy = copy;
```
#### 2.2 gulp.dest()
创建一个用于将 Vinyl 对象写入到文件系统的流。（其实就是文件写到哪里）

```
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'));
}

exports.copy = copy; 
```
#### 2.3 gulp.series()
将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。对于使用 series() 和 parallel() 组合操作的嵌套深度没有强制限制。（其实就是组合输出任务，series按顺序，parallel不按顺序）

```
const { series } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = series(javascript, css);
```
#### 2.4 gulp.parallel()
将任务功能和/或组合操作组合成同时执行的较大操作。对于使用 series() 和 parallel() 进行嵌套组合的深度没有强制限制。（其实就是组合输出任务，series按顺序，parallel不按顺序）

```
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css); 
```
#### 2.5 gulp.watch()
监听 globs 并在发生更改时运行任务。任务与任务系统的其余部分被统一处理。（其实就是监听文件，一有改动就重新打包）

```
const { watch } = require('gulp');

watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
}); 
```
#### 2.6 gulp.task()
提醒: 这个API不再是推荐的模式了 - 推荐使用export your tasks。

### 三、gulp的使用
文件结构


--css  
----css1.css  
----css2.css  
--less  
----less1.less  
----less2.less  
--sass  
----scss.scss  
----scss.scss  
--js  
----1.js  
----2.js  
--images  
----1.png  
----2.jpg  
--node_modules  
--gulpfile.js  
--package.json

//打包出来的  
--dist  
----css  
------css1.css  
------css2.css  
------less1.css  
------less2.css  
------scss1.css   
------scss2.css  
----js  
----1.js  
----2.js  
----images  
------1.png  
------2.jpg

```
// 使用gulp必须要在根目录创建一个gulpfile.js文件
// 在执行gulp命令时自动读取该文件及该文件夹下的default任务
gulp
// 在执行gulp task1命令时自动读取该文件及该文件夹下的task1任务
gulp task1
```


#### 3.1 压缩js
压缩 js 代码可降低 js 文件大小，提高页面打开速度。在不利用 gulp 时我们需要通过各种工具手动完成压缩工作。所有的 gulp 代码编写都可以看做是将规律转化为代码的过程。

```
// 引入gulp的api
var {src,dest,series,watch} = require('gulp');
// 引入js解压工具
var uglify = require('gulp-uglify');
// 定义js解压任务
function script(cb){
  src('js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
  cb()
}
exports.default=series(script)
```

#### 3.2 压缩css
压缩 css 代码可降低 css 文件大小，提高页面打开速度。我们接着将规律转换为 gulp 代码

```
// 引入gulp的api
var {src,dest,series,watch} = require('gulp');
// 引入css压缩工具
var minifyCSS = require('gulp-minify-css');
// 定义css压缩任务
function css(cb){
  src('css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
exports.default=series(css)
```
#### 3.3 压缩less
Less是一门CSS预处理语言，它扩充了CSS语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护。

```
// 引入gulp的api
var {src,dest,series,watch} = require('gulp');
// 引入less压缩工具
var lessmin = require('gulp-less');
// 定义less转换css并压缩任务
function less(cb){
  src('less/*.less')
    .pipe(lessmin())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
exports.default=series(less)
```
#### 3.4 压缩sass
Sass是一种CSS的开发工具，提供了许多便利的写法，大大节省了开发者的时间，使得CSS的开发，变得简单和可维护。

```
// 引入gulp的api
var {src,dest,series,watch} = require('gulp');
// 引入sass压缩工具
var sassmin =  require('gulp-sass')(require('sass'));
// 定义sass转换css并压缩任务
function sass(cb){
  src('sass/*.scss')
    .pipe(sassmin())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
  cb()
}
exports.default=series(sass)
```
#### 3.5 压缩图片
压缩 图片文件可降低文件大小，提高图片加载速度。找到规律转换为gulp代码
```
// 引入gulp的api
var {src,dest,series,watch} = require('gulp');
// 引入图片压缩工具
var imagemin = require('gulp-imagemin');
// 定义图片压缩任务
function images(cb){
  src('images/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(dest('dist/images'))
  cb()
}
exports.default=series(images)
```

#### 3.6 watch监听任务

```
// region 监听代码
function watcher(cb){
  watch('js/*.js',script)
  watch('css/*.css',css)
  watch('images/*.*',images)
  cb()
}
// endregion
```
#### 完整代码
// gulpfile.js代码
```
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
  cb()
}
// endregion

exports.watcher=watcher
exports.default=series(script,css,images,less,sass)

```
### 四、链接地址
[github参考代码](https://github.com/T-en1991/usePackages/tree/main/useGulp)
