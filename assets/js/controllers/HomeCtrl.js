addyApp.controller('HomeCtrl', ['$scope','$http','$modal', function($scope, $http, $modal){

  $scope.name = "claire"

  $scope.contacts = [];

  $http.get('/.api/contact')

}]);