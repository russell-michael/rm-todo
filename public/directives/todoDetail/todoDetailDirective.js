angular.module('app').directive('todoDetail', function () {

  return {
    templateUrl: './directives/todoDetail/todoDetailTemplate.html',
    replace: true,
    controller: function ($scope) {
      $scope.changesMade = false;
      var originalVals = null;

      function resetValues() {
        $scope.changesMade = false;
        originalVals = angular.copy($scope.task);
      }

      $scope.$watch('task', function(newVal, oldVal) {
        if(!angular.equals(newVal, oldVal)) {
          originalVals = angular.copy(newVal);
        }
      });

      $scope.$watchCollection('task', function (newVal) {
        if (newVal) {
          if (!originalVals) originalVals = angular.copy(newVal);
          $scope.changesMade = !angular.equals(originalVals, newVal);
        }
      });

      $scope.save = function (task) {
        task = angular.copy(task);
        $scope.onSave({task: task});
        resetValues();
      };

      $scope.cancel = function () {
        $scope.task = angular.copy(originalVals);
        resetValues();
      };
    },
    scope: {
      task: '<',
      onSave: '&',
      // onRestore: '&',
      onDelete: '&'
    }
  }
});
