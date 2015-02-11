addyApp.controller('HomeCtrl', ['$scope','$http','$modal', function($scope, $http, $modal){

  $scope.contacts = [];

  $http.get('/.api/contact')
    .success(function(data) {
      $scope.contact = data;
    }).error(function(err) {
      console.log('error in HomeCtrl');
    })

}]);