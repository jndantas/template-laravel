const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

const getFiles = directory => {
    try {
        return fs.readdirSync(directory).filter(
            file => fs.statSync(path.resolve(directory, file)).isFile()
        );
    } catch (error) {
        return [];
    }
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css', [
        //
    ]);

mix.combine([
    'node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js',
    'node_modules/moment/min/moment-with-locales.min.js',
], 'public/js/stisla/master.js').sourceMaps();

mix.copy(`resources/js/stisla/app.js`, 'public/js/stisla');
mix.copy(`resources/js/stisla/scripts.js`, 'public/js/stisla');
