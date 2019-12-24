const gulp = require('gulp');
const gulpLess = require('gulp-less');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const del = require('del');

/**
 * 文件路径
 */
const srcPath = './src/**';

const dist = './dist/';

const filesPath = {
  less: [
    `${srcPath}/pages/**/*.less`,
    `${srcPath}/components/**/*.less`,
    `${srcPath}/styles/*.less`,
    `${srcPath}/app.less`
  ],
  image: [`${srcPath}/assets/**/*.{png,jpg,gif}`]
};

/**
 * 清除dist目录
 */
gulp.task('clean', done => {
  del.sync([`${dist}/**`]);
  done();
});

/**
 * 编译less文件
 */
const less = () => {
  return gulp
    .src(filesPath.less)
    .pipe(gulpLess())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest(dist));
};
gulp.task(less);

/**编译image */
const image = () => {
  return gulp
    .src(filesPath.image)
    .pipe(imagemin())
    .pipe(gulp.dest(`${dist}/`));
};

gulp.task('image', image);

// 复制 wxml, wxss, json
const copy = done => {
  gulp
    .src(`${srcPath}/**/*.@(wxml|wxss|json|wxs|js)`, { base: 'src' })
    .pipe(gulp.dest(dist));
  done();
};
gulp.task('copy', copy);

/**
 * 监听文件变化
 */
gulp.task('watch', () => {
  let watchLessFiles = [...filesPath.less];
  watchLessFiles.pop();
  gulp.watch(filesPath.less, less);
  gulp.watch(filesPath.image, image);
  gulp.watch(srcPath, copy);
});

/* build */
gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('less', 'image', 'copy'))
);

/* dev */
gulp.task('dev', gulp.series('clean', gulp.parallel('less', 'image', 'copy'), 'watch'));
