angular.module('app').directive('todoDetail', function() {

    return {
        templateUrl: './directives/todoDetail/todoDetailTemplate.html',
        replace: true,
        controller: function($scope) {
            $scope.task = $scope.item; // {notes: 'my new task', title: 'Groceries'}
            console.log($scope.item)
        },
        scope: {

          // what is this < for?
          // @ one way binding for a string
          // < one way bidning for a string, and also one way for objects
            item: '=',
            onSaveInDirective: '&',
            onRestore: '&',
            onDelete: '&',
            
        }
    }
});
