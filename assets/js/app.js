var addyApp = angular.module('AddyApp',['ui.bootstrap','ngRoute']);

addyApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl'
    })
}]);