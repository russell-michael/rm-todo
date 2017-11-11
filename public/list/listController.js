angular.module('app').controller('listController', function($scope, listService){

  $scope.item = {title: 'test', notes: 'This is my note'};

  // These are functions to be passed into the detail directive
  // Eventually they should invoke a function from a service to actually do the stuff
  $scope.onSave = function(item) {
    console.log('saving...', item);
  };

  $scope.onRestore = function(item) {
      console.log('restoring...', item);
  };

  $scope.onDelete = function(item) {
      console.log('deleting...', item);
  };
});
