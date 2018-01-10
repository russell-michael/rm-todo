angular.module('app').controller('listController', function($scope, listService){

  /////michaels functions
  $scope.onSave = function(item) {
    $scope.list = listService.saveEdits(item);
  };

  $scope.onRestore = function(item) {
      console.log('restoring...', item);
  };

  $scope.onDeleteTask = function(item) {
      listService.deleteTask(item);
  };

  $scope.selectListItem = function(task){
    console.log("the new task is ", task);
    if (!$scope.item || $scope.item.id !== task.id) {
      $scope.item = angular.copy(task);
    }
  };







  ///russells functions
  //get
  $scope.getList = function(input){
    return listService.getList();
  };

  //post
  // $scope.createList = function(input){
  //   $scope.list = listService.createList(input);
  //   console.log("create list", input, $scope.list);
  //
  // }

  //post
  $scope.addToList = function(input){
    $scope.list = listService.addToList(input);
    console.log("addto list", input, $scope.list);
  }

  //delete
  // $scope.deleteList = function(){
  //   $scope.list = listService.deleteList();
  //   console.log("delete List", $scope.list);
  // }






});
