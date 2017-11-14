angular.module('app').service('listService', function($http){

  var list = [
    {
      id: 1,
      task: "clean room"
    },
    {
      id: 2,
      task: "grocery shop"
    },
    {
      id: 3,
      task: "do homework"
    }
  ];


  //get
  this.getList = function(){
    return list;
  }

  //post
  this.createList = function(newList){
    list = newList;
    // return list;
  }

  //put
  this.addToList = function(newItem){
    if(newItem){
      list.push(newItem);
      return list;
    }
  }

  //delete







  this.serviceTest = "service test"
})
