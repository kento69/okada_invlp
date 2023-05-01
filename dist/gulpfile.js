const gulp = require("gulp");
const sass = require("gulp-dart-sass");
// CSS解析ツール
const postcss = require("gulp-postcss");
// 自動でベンダープレフィクスを付与する
const autoprefixer = require("autoprefixer");
// flexboxに関するバグを除去する
const flexBugsFixes = require("postcss-flexbugs-fixes");
// CSSを圧縮する
const cssWring = require("csswring");
// jsを圧縮する
const uglify = require("gulp-uglify");
// 画像を圧縮する
const imagemin = require("gulp-imagemin");
// pngの不可逆圧縮
const imageminPngquant = require("imagemin-pngquant");
// JPGの不可逆圧縮
const imageminMozjpeg = require("imagemin-mozjpeg");
// 自動リロード
const browserSync = require("browser-sync").create();
// EJS
const ejs = require("gulp-ejs");
const rename = require("gulp-rename"),
  BUILD_DIRECTORY = "../public";
  // BUILD_DIRECTORY = "./";
const data = require("gulp-data");
const src = {
  root: "./",
  ejs: ["./ejs/**/*.ejs", "!" + "./ejs/**/_*.ejs"],
};

// autoprefixerのオプション
// blowsers 対応ブラウザ
// Grid Layout をサポートするかどうか
const autoprefixerOption = {
  grid: true
};

const postcssOption = [
  flexBugsFixes,
  autoprefixer(autoprefixerOption),
  cssWring,
];

const imageminOption = [
  imageminPngquant({
    quality: [.65, .85],
  }),
  imageminMozjpeg({
    quality: "80",
  }),
  imagemin.gifsicle(),
  imagemin.mozjpeg(),
  imagemin.optipng(),
  imagemin.svgo(),
];

const browserSyncOption = {
  server: "../public/",
};

sass.compiler = require("sass"); 

gulp.task("sass", () => {
  return gulp
    .src("./assets/sass/style.scss")
    .pipe(sass())
    .pipe(postcss(postcssOption))
    // キリカエ
    .pipe(gulp.dest("../public/assets/css/"));
    // .pipe(gulp.dest("../wp/assets/css/"));
});

gulp.task("ejs", () => {
  return gulp
    .src(src.ejs)
    .pipe(
      data(function (file) {
        filePath = `${file.path
          .split(src.root)
          [file.path.split(src.root).length - 1].replace(".ejs", "")}`;
        fileName = filePath.split("\\").pop();
        return {
          filename: fileName,
        };
      })
    )
    .pipe(ejs())
    .pipe(
      rename({
        extname: ".html",
      })
    )
    .pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('js', function(done) {
  gulp.src('./assets/js/init.js')
      .pipe(uglify())
      // キリカエ
      .pipe(gulp.dest('../public/assets/js/'));
      // .pipe(gulp.dest('../wp/assets/js/'));
  done();
});

gulp.task("serve", (done) => {
  browserSync.init(browserSyncOption);
  done();
});

gulp.task("watch", () => {
  const browserReload = (done) => {
    browserSync.reload();
    done();
  };
  gulp.watch("**.html", browserReload);
  gulp.watch("ejs/*.ejs", gulp.series("ejs"));
  gulp.watch("ejs/**/*.ejs", gulp.series("ejs"));
  gulp.watch("ejs/*.ejs", browserReload);
  gulp.watch("ejs/**/*.ejs", browserReload);
  gulp.watch("assets/js/*.js", gulp.series("js"));
  gulp.watch("assets/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("assets/sass/**/*.scss", browserReload);
});

gulp.task("default", gulp.series("serve", "watch"));