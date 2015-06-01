'use strict';

/**
 * @ngdoc function
 * @name conojoWebsiteApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the conojoWebsiteApp
 */
angular.module('conojoWebsiteApp')
    .controller('BlogCtrl', function ($scope,ENV) {
        $scope.envServer = ENV.envServer;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
