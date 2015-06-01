'use strict';

/**
 * @ngdoc function
 * @name conojoWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the conojoWebsiteApp
 */
angular.module('conojoWebsiteApp')
    .controller('AboutCtrl', function ($scope,ENV) {
        $scope.envServer = ENV.envServer;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
