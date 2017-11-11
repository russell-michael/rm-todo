angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('list', {
    url: '/',
    templateUrl: 'list/list.html',
    controller: 'listController'
  })
})
