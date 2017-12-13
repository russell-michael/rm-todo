angular.module('app').directive('todoList', function() {

    return {
        templateUrl: './directives/todoList/todoListTemplate.html',
        controller: function($scope, listService) {
          $scope.list = $scope.getList();
        },
        link: function(scope, element, attrs) {


        },

        scope: {
          selectListItem: '&',
          getList: '&',
          addToList: '&'
          // deleteList: '&'
        }
    }
});
