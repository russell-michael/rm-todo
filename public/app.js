angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('list', {
    url: '/list',
    templateUrl: 'list/list.html'

  })
})
