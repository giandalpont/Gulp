const { src, dest } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')


function js () {
    return src('./src/init.js')
        .pipe(concat('init.min.js'))
        .pipe(uglify())
        .pipe(dest('./src'))
}

exports.js = js
