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
              listService.createList(inputTask);
              $scope.list = listService.getList();
            }

            //put
            $scope.addToList = function(inputTask){
              console.log(inputTask);

              listService.addToList(inputTask);
              $scope.list = listService.getList();
            }

            //delete

        }
        // scope: {
        //
        // }
    }
});
