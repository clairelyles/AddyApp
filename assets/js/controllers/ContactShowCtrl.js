addyApp.controller("ContactShowCtrl", ['$scope','$http', '$routeParams', '$location', '$modal', function($scope, $http, $routeParams, $location, $modal) {

  var contactId = $routeParams.id;

  $http.get("/.api/contact/"+contactId)
  .success(function(data){
    $scope.contact = data
  }).error(function(err) {
    alert("show controller error")
  });


}]);