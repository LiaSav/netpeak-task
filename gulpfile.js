const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
// const groupMedia = require('gulp-group-css-media-queries');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


gulp.task('clean', function (done) {
    if (fs.existsSync('./dist/')) {
        return gulp.src('./dist/', { read: false })
            .pipe(clean({ force: true }));
    }
    done();
});

const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file',
};

const plumberHtmlConfig = {
    errorHandler: notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>',
        sound: false,
    })
};

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(plumber(plumberHtmlConfig))
        .pipe(fileInclude(fileIncludeSetting))
        .pipe(gulp.dest('./dist/'));
});

const plumberSassConfig = {
    errorHandler: notify.onError({
        title: 'Styles',
        message: 'Error: <%= error.message %>',
        sound: false,
    })
};

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(plumber(plumberSassConfig))
        .pipe(sourceMaps.init())
        .pipe(sass())
        // .pipe(groupMedia())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('fontsCss', function () {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('spriteSvg', function () {
    return gulp.src('./src/sprite-svg/*.svg')
        .pipe(gulp.dest('./dist/sprite-svg/'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
});

const serverOptions = {
    livereload: true,
    open: true,
};

gulp.task('server', function () {
    return gulp.src('./dist/')
        .pipe(server(serverOptions));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/images/**/*', gulp.parallel('images'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('./src/css/*.css', gulp.parallel('fontsCss'));
    gulp.watch('./src/sprite-svg/*.svg', gulp.parallel('spriteSvg'));
    gulp.watch('./src/js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html', 'sass', 'images', 'fonts', 'fontsCss', 'spriteSvg', 'js'),
    gulp.parallel('server', 'watch'),
));