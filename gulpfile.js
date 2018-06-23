var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var minHtml = require('gulp-htmlmin');
var inlineVue = require('gulp-inline-vue-template');
var del = require('del');

var paths = {
    htmls: {
        src: 'views/*.html',
        dest: 'dist/'
    },
    styles: {
        src: ['static/css/reset.css', 'static/css/chart.css'],
        dest: 'static/dist/'
    },
    scripts: {
        src: ['static/js/*.js'],
        dest: 'static/dist/'
    },
    components: {
        src: ['static/js/component/*.js'],
        dest: 'static/dist/'
    },
    vender: {
        src: ['static/js/vender/*.js'],
        dest: 'static/dist/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['static/dist']);
}

/*
 * Define our tasks using plain functions
 */

function htmls() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src(paths.htmls.src)
        .pipe(minHtml(options))
        .pipe(gulp.dest(paths.htmls.dest));
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(concat('trend.min.css'))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('trend.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function components() {
    return gulp.src(paths.components.src, {
            sourcemaps: true
        })
        .pipe(inlineVue())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('components.min.js'))
        .pipe(gulp.dest(paths.components.dest));
}

function vender() {
    return gulp.src(paths.vender.src, {
            sourcemaps: true
        })
        .pipe(concat('vender.min.js'))
        .pipe(gulp.dest(paths.vender.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.vender.src, vender);
    gulp.watch(paths.styles.src, styles);
}

// watch();

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(/* htmls,  */ styles, scripts, components, vender));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);