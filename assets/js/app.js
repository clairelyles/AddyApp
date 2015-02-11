var addyApp = angular.module('AddyApp',['ui.bootstrap','ngRoute']);

addyApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/contact/:id', {
      templateUrl: '/views/contact/show.html',
      controller: 'ContactShowCtrl'
    })
    .when('/contact/new', {
      templateUrl: '/views/contact/new.html',
      controller: 'ContactNewCtrl'
    })

}]);