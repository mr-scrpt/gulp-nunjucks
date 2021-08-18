const gulp = require("gulp");
const { config } = require("./config/config");
const {
  sass,
  clean,
  img,
  imgProd,
  js,
  fonts,
  reloader,
  nunjucks
} = require("./config/tasks");

const watch = require("gulp-watch");

gulp.task(
  "watch",
  gulp.parallel(
    gulp.series("clean", "img", "sass", "nunjucks", "js", "fonts", "reloader"),
    () => {
      watch(config.src + config.nunjucks.watch, gulp.series("nunjucks"));
      watch(config.src + config.sass.watch, gulp.series("sass"));
      watch(config.src + config.js.src, gulp.series("js"));
    }
  )
);

gulp.task(
  "build",
  gulp.series("clean", "sass", "nunjucks", "js", "fonts", "img") //"imgProd"
);
