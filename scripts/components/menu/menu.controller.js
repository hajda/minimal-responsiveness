(function menuControllerDefinition() {
    'use strict';

    angular
        .module('flxApp')
        .controller('FlxMenuController', menuController)
        .filter('flxmenutoggler', menutogglerFilter)
    ;

    menuController.$inject = ['$scope', '$window'];

    function menuController($scope, $window) {
        $scope.menu = {mobileHide: true};

        /* API */

        this.toggleMobileHide = toggleMobileHide;

        /* public */

        function toggleMobileHide() {
            console.log(($scope.menu.mobileHide ? 'hidden' : 'shown') + ' ---> ' + (!$scope.menu.mobileHide ? 'hidden' : 'shown'));
            $scope.menu.mobileHide = !$scope.menu.mobileHide;
        }

        /* listeners */

        //$window.onResize(function onResize() {
        //    if (isDesktopView()) {
        //        $scope.menu.mobileHide = true;
        //    }
        //});

        /* private */

        function isDesktopView() {
            return false; // TODO
        }
    }

    function menutogglerFilter() {
        return menutoggler;

        function menutoggler(input) {

            return input ? 'hidden' : 'shown';
        }
    }
})();
