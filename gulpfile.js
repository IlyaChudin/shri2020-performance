const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
 
function css() {
  return gulp
    .src("./src/css/*.css")
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./css"));
}

function img() {
  return gulp
    .src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./img"));
}

exports.css = css;
exports.img = img;
exports.default = gulp.parallel(css, img);