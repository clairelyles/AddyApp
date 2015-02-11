addyApp.controller('HomeCtrl', ['$scope','$http','$modal', function($scope, $http, $modal){

  $scope.contacts = [];

  $http.get('/.api/contact')
    .success(function(data) {
      $scope.contact = data;
    }).error(function(err) {
      console.log('error in HomeCtrl');
    });

  $scope.deleteContact = function(idx) {
    var contactId = $scope.contact[idx].id;
    $http.delete('/.api/contact/'+contactId).success(function(data){
      $scope.contact.splice(idx,1);
    }).error(function(err) {
      alert(err);
    });
  };

  $scope.editContact = function(idx) {
    var contactIdx = idx;
    $modal.open({
      templateUrl: '/views/contact/editModal.html',
      controller: 'ContactEditModalCtrl',
      resolve: {
        contact: function() {
          return $scope.contact[contactIdx]
        }
      }
    }).result.then(function(updatedConact) {
      console.log('modal saved: ', updatedConact);
    },function() {
      // alert('modal closed with cancel');
    });
  };

}]);