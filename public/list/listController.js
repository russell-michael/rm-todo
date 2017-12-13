angular.module('app').controller('listController', function($scope, listService){

  $scope.item = {};

  /////michaels functions
  $scope.onSave = function(item) {
    // listService.saveEdits(item)
    console.log('saving...', item);
  };

  $scope.onRestore = function(item) {
      console.log('restoring...', item);
  };

  $scope.onDelete = function(item) {
      console.log('deleting...', item);
  };

  $scope.selectListItem = function(task){
    console.log("the new task is ", task);
    $scope.item = task;
  };







  ///russells functions
  //get
  $scope.getList = function(input){
    console.log("get list", input, $scope.list);
    return listService.getList();

  }

  //post
  $scope.createList = function(input){
    $scope.list = listService.createList(input);
    console.log("create list", input, $scope.list);

  }

  //put
  $scope.addToList = function(input){
    $scope.list = listService.addToList(input);
    console.log("addto list", input, $scope.list);

  }

  //delete
  $scope.deleteList = function(){
    $scope.list = listService.deleteList();
    console.log("delete List", $scope.list);
  }






});
