/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server) {

    var controller = requireDirectory(module, './server/controllers');

    // Array of routes for Hapi
    var routeTable = [

        //APP ROUTES
        {
            method: 'GET',
            path: '/',
            config: controller.base.index
        },
        {
          method: 'POST',
          path: '/scripts/{fileName}',
          config: controller.base.createScript
        },
        {
          method: 'GET',
          path: '/scripts/{fileName}',
          config: controller.base.getScript
        },

        // ASSETS, JS, CSS, ETC.
        {
            method: 'GET',
            path: '/partials/{path*}',
            config: controller.assets.partials
        },

        {
            method: 'GET',
            path: '/css/{path*}',
            config: controller.assets.css
        },
        {
            method: 'GET',
            path: '/js/{path*}',
            config: controller.assets.js
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: controller.assets.bower
        }
    ];
    return routeTable;
}
