angular.module('app').controller('listController', function($scope, listService){
  $scope.test = "scope test";

  $scope.test1 = listService.serviceTest;

  $scope.getCards = function(){
    listService.getCards().then(function(response){
      $scope.cards = response.data;
      console.log($scope.cards);
    })
  }

  $scope.getCards();
})
