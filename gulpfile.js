const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

function css() {
  return gulp
    .src("./src/css/*.css")
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./css"));
}

exports.default = css;