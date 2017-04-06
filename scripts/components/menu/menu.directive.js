(function menuDirectiveDefinition() {
    'use strict';

    angular
        .module('flxApp')
        .directive('flxMenu', menuDirective)
    ;

    menuDirective.$inject = [];

    function menuDirective() {
        return {
            restrict: 'AE',
            templateUrl: './scripts/components/menu/menu.template.html',
            controller: 'FlxMenuController',
            controllerAs: 'MenuCtrl'
        };
    }
})();

