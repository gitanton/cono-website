'use strict';

/**
 * @ngdoc function
 * @name conojoWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the conojoWebsiteApp
 */
angular.module('conojoWebsiteApp')
    .controller('MainCtrl', function ($scope) {
        //$scope.giftStepOne = true;
        //$scope.giftStepTwo = false;
        //$scope.giftStepThree = false;

        $scope.showTop = true;
        $scope.showVideo = false;
        $scope.showBottom = true;

        $scope.openVideoPlay = function () {
            $('#showVideo').append('<iframe src="//player.vimeo.com/video/126855836" frameborder="0"></iframe>').modal({
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

        //$scope.showStepTwo = function(){
        //    $scope.giftStepOne = false;
        //    $scope.giftStepTwo = true;
        //    $scope.giftStepThree = false;
        //}
        //
        //$scope.showStepThree = function(){
        //    $scope.giftStepOne = false;
        //    $scope.giftStepTwo = false;
        //    $scope.giftStepThree = true;
        //}

        //$scope.giftStepCurrentOne = function(){
        //    if($scope.giftStepOne){
        //        return 'gift-pack-step-current';
        //    }else{
        //        return '';
        //    }
        //}
        //
        //$scope.giftStepCurrentTwo = function(){
        //    if($scope.giftStepTwo){
        //        return 'gift-pack-step-current';
        //    }else{
        //        return '';
        //    }
        //}
        //
        //$scope.giftStepCurrentThree = function(){
        //    if($scope.giftStepThree){
        //        return 'gift-pack-step-current';
        //    }else{
        //        return '';
        //    }
        //}
        //
        //$scope.shareTo = function(val){
        //    var permalink = 'http://conojo.scmreview.com/website-new';
        //    if(val == 'twitter'){
        //        window.open("http://twitter.com/home?status=" + permalink);
        //    }else if(val == 'facebook'){
        //        window.open("http://www.facebook.com/sharer.php?u=" + permalink);
        //    }
        //}
        //
        //$scope.openGift = function(){
        //    $('#gift-pack-modal').modal('toggle');
        //}

        $scope.selectPlan = function (event) {
            $(event.target).parent().siblings().removeClass('pricing-item-selected').addClass('pricing-item');
            $(event.target).parent().removeClass('pricing-item').addClass('pricing-item-selected');
        };

        $scope.goToSignup = function () {
            var url = 'http://app.conojo.com/#/register';
            window.open(url);
        };
    });
