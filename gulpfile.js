var gulp = require('gulp');

var coffee = require('gulp-coffee');

var gutil=require('gulp-util');

var sass=require('gulp-sass');

var uglify = require('gulp-uglify');


var uglifycss = require('gulp-uglifycss');


var rename=require("gulp-rename");

var fs=require("fs");

var unzip=require("unzip");

gulp.task('default',["compile"],function(){
     
});

gulp.task('watch',function(){
     
      gulp.watch(['**/*.coffee',"*.coffee",'**/*.scss'],["compile"]);



});


gulp.task('unzip-icomoon',function(cb){

     fs.createReadStream('temp/icomoon.zip').pipe(unzip.Extract({ path: 'temp/icomoon' })).on('close',cb);

});

gulp.task('icons',["unzip-icomoon"],function(cb){
      gulp.src("temp/icomoon/fonts/**").pipe(gulp.dest("public/src/css/fonts"));
      gulp.src("temp/icomoon/style.css").pipe(rename("icons.css")).pipe(gulp.dest("public/src/css/"));
      cb(null);
});


gulp.task('release',function(cb){
	 // gulp.src(["public/src/css/fonts/**","public/src/img/**"]).pipe(gulp.dest("public/dist"));
      
      gulp.src(["public/src/js/**/*.min.js","public/src/css/**/*.min.css","public/src/css/fonts/**","public/src/img/**"],{base:"public/src"}).pipe(gulp.dest("public/dist"));
      
      gulp.src(["public/src/js/**/*.js","!public/src/js/**/*.min.js"],{base:"public/src"}).pipe(uglify()).pipe(gulp.dest("public/dist"));
   
	gulp.src(["public/src/css/**/*.css","!public/src/css/**/*.min.css",],{base:"public/src"}).pipe(uglifycss()).pipe(gulp.dest("public/dist"));

	cb(null)
});


gulp.task('compile',function(){
   gulp.src(['./**/*.coffee','./*.coffee'],{base:"./"}).pipe(coffee({bare:true}).on('error',gutil.log)).pipe(gulp.dest("./"));
   gulp.src("./**/*.scss",{base:"./"}).pipe(sass().on('error',sass.logError)).pipe(gulp.dest("./"));
});