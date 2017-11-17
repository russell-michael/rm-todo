angular.module('app').directive('todoList', function() {

    return {
        templateUrl: './directives/todoList/todoListTemplate.html',

        controller: function($scope, listService) {

            //get
            $scope.getList = function(){
              $scope.list = listService.getList();
            }

            //post
            $scope.createList = function(inputTask){
              console.log(inputTask);
              $scope.list = listService.createList(inputTask);
            }

            //put
            $scope.addToList = function(inputTask){
              $scope.list = listService.addToList(inputTask);
            }

            //delete
            $scope.deleteList = function(){
              $scope.list = listService.deleteList();
            }

        }
    }
});
