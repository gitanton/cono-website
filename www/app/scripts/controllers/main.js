'use strict';

/**
 * @ngdoc function
 * @name conojoWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the conojoWebsiteApp
 */
angular.module('conojoWebsiteApp')
    .controller('MainCtrl', function ($scope,ENV) {
        $scope.envServer = ENV.envServer;
        $scope.showTop = true;
        $scope.showVideo = false;
        $scope.showBottom = true;

        $scope.openVideoPlay = function () {
            $('#showVideo').append('<iframe src="//player.vimeo.com/video/124664015" frameborder="0"></iframe>').modal({
                backdrop: 'static',
                keyboard: false
            });
        };

        $scope.closeVideoPlay = function () {
            $('iframe').remove();
            $('#showVideo').modal('hide');
        };

        $scope.showTopScreenActive = function () {
            $scope.showTop = false;
            $scope.showVideo = true;
            $scope.showBottom = true;
        };

        $scope.showVideoScreenActive = function () {
            $scope.showTop = true;
            $scope.showVideo = false;
            $scope.showBottom = true;
        };

        $scope.showBottomScreenActive = function () {
            $scope.showTop = true;
            $scope.showVideo = true;
            $scope.showBottom = false;
        };

        $scope.goToSignup = function () {
            var url = ENV.envServer + '/#/register';
            window.open(url);
        };
    });
