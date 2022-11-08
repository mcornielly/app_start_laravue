const mix = require('laravel-mix');

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
    .sass('resources/sass/app.scss', 'public/css');

mix.browserSync({
    proxy: 'app_start_laravue.test',
    // browser: 'firefox'
    browser: 'C:\\Program Files\\Firefox Developer Edition\\firefox.exe',//Firefox Developer
    // open: false
});

//deshabilita las notificaciones de larevel mix.
mix.disableNotifications();
