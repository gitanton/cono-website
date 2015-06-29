'use strict';

/**
 * @ngdoc overview
 * @name conojoWebsiteApp
 * @description
 * # conojoWebsiteApp
 *
 * Main module of the application.
 */
angular
    .module('conojoWebsiteApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angularSmoothscroll'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: 'Collaboration & Prototyping Tool | UI/UX, Video, Files',
                description: 'The most comprehensive creative collaboration platform there is. Get feedback on UI/UX, video and files in real-time. Get started with our free trial.'
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                title: 'Contact Us | Conojo Collaboration Platform',
                description: 'Contact Conojo | The most comprehensive creative collaboration platform there is. Get feedback on UI/UX, video and files in real-time.'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('ENV', function () {
        return {
            envServer: 'http://app.conojo.com'
        };
    })
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
            $rootScope.description = current.$$route.description;
        });
    }]);
