/**
 * Created by Administrator on 2017/9/4 0004.
 */
var gulp = require('gulp');  //加载gulp模块
var uglifyJs = require('gulp-uglify');  //加载uglify模块 压缩js的模块
var cleanCss = require('gulp-clean-css');  //加载clean模块 压缩css的模块

//定义一个压缩js代码的任务
gulp.task('uglifyJs', [], function() {
    gulp.src('*.js')  //找到原始文件
        .pipe(uglifyJs())    //压缩js代码
        .pipe(gulp.dest('js'));  //压缩后的代码储存在这里
});
// //定义一个压缩css代码的任务
gulp.task('cleanCss', [], function() {
    gulp.src('*.css')  //找到原始文件
        .pipe(cleanCss())    //压缩css代码
        .pipe(gulp.dest('css'));  //压缩后的代码储存在这里
});

// //定义一个监听任务
gulp.task('watch', function() {
    //监听文件，一旦文件有变化，就执行相应的任务
    gulp.watch('*.js', ['uglifyJs']);
    gulp.watch('*.css', ['cleanCss']);
});

// //默认执行的任务, 执行完数组中的任务之后，再执行当前任务
gulp.task('default', ['uglifyJs'], function() {
    console.log('执行完毕');
});
