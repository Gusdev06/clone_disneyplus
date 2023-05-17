const gulp = require('gulp') // Aqui importamos o gulp
const sass = require('gulp-sass')(require('sass')); //aqui importamos o sass

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}