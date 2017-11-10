angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('list', {
    url: '/',
    templateUrl: 'list/list.html'

  })
})
