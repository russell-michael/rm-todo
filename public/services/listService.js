angular.module('app').service('listService', function($http){


  this.getData = function(){
    return $http({
      method: 'GET',
      url: '/get'
    })
  }

  this.getCards = function(){
    return $http({
      method: 'GET',
      url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
    })
  }

  this.serviceTest = "service test"
})
