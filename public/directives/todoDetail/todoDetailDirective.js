angular.module('app').directive('todoDetail', function() {

    return {
        templateUrl: './directives/todoDetail/todoDetailTemplate.html',
        replace: true,
        controller: function($scope) {
            $scope.task = $scope.item;
        },
        scope: {
            item: '<',
            onSave: '&',
            onRestore: '&',
            onDelete: '&'
        }
    }
});
