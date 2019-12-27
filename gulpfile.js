var gulp = require('gulp'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create();
// const { src, dest } = require('gulp');

function css_sass(done) {
   gulp.src('sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errorLogToConsole: true, 
        outputStyle: 'expanded'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        // browsers: ['last 6 versions'], 
        cascade: false
    }))
    // .pipe(rename('main.css'))
    // .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
    done();
}

function jsLibs(done) {
    gulp.src(['libs/jquery.min.js', 'libs/typed.min.js'])
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('js'));
    done();
}

function brSync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function brReload(done) {
    browserSync.reload();
    done();
}

function watchSass() {
    gulp.watch('sass/**/*.sass', css_sass);
    gulp.watch('js/**/*.js', brReload);
    gulp.watch("./**/*.html", brReload);
}

// gulp.task()
gulp.task('default', gulp.parallel(brSync, watchSass));
