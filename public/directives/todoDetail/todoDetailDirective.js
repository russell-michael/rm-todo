angular.module('app').directive('todoDetail', function() {

    return {
        templateUrl: './directives/todoDetail/todoDetailTemplate.html',
        replace: true,
        controller: function($scope) {

        },
        scope: {
            task: '<',
            onSave: '&',
            // onRestore: '&',
            // onDelete: '&'
        }
    }
});
