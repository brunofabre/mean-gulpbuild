angular.module('appNameBase').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('nameUrl', {
            url: "/nameUrl",
            templateUrl: "nameTemplateUrl"
        })

    $urlRouterProvider.otherwise('/nameUrl')
})