angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('list', {
    url: '/',
    templateUrl: 'list/list.html',
    controller: 'listController'
  })
  .state('options', {
    url: '/options',
    template: '<div><todo-detail item="hat"></todo-detail></div>',
    controller: 'optionsCtrl'
  })
})
