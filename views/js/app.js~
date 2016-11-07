var app = angular.module('event', ['ui.router', 'ngCookies', 'ngMessages', 'pascalprecht.translate', 'ngSanitize', 'ui.codemirror', 'ui.materialize']);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider){


      $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/views/home/home.html'
      });

    $urlRouterProvider.otherwise('home');
}]);

