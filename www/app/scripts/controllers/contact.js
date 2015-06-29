'use strict';

/**
 * @ngdoc function
 * @name conojoWebsiteApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the conojoWebsiteApp
 */
angular.module('conojoWebsiteApp')
    .controller('ContactCtrl', function ($scope,ENV) {
        $scope.envServer = ENV.envServer;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
