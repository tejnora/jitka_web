const { src, dest, watch } = require("gulp");
const pug = require("gulp-pug");

function html() {
  return src("src/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));
}

exports.html = html;

function htmlRelease() {
  return src("src/*.pug")
    .pipe(pug({ pretty: false}))
    .pipe(dest("dist"));
}

exports.htmlRelease = htmlRelease;

const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dest/css/"));
}

exports.css = css;

const concat = require("gulp-concat");

function js() {
  return src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("dist/js"));
}

exports.js = js;

exports.watch = function () {
  //watch("src/scss/*.scss", css)
  watch("src/**/*.pug", html)
}