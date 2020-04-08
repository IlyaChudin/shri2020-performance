const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser-js");
const inlinesource = require('gulp-inline-source');

function css() {
  return gulp
    .src("./src/css/*.css")
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest("./css"));
}

function svg() {
  return gulp
    .src("./src/img/*.svg")
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [{ removeViewBox: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./img"));
}

function html() {
  return gulp
    .src("./src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./"));
}

function js() {
  return gulp
    .src("./src/js/*.js")
    .pipe(
      terser({
        mangle: {
          toplevel: true,
        },
      })
    )
    .pipe(gulp.dest("./js/"));
}

const nosvg = gulp.series(gulp.parallel(html, css, js), inline);

function watch() {
  gulp.watch("./src/**/*.*", nosvg);
}

function inline() {
  return gulp.src('./index.html')
  .pipe(inlinesource())
  .pipe(gulp.dest('./'));
}


exports.css = css;
exports.svg = svg;
exports.html = html;
exports.js = js;
exports.watch = watch;
exports.inline = inline;
exports.nosvg = nosvg;
exports.default = gulp.parallel(nosvg, svg);
