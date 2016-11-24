'use strict';

/**
 * @ngdoc overview
 * @name bugcenterApp
 * @description
 * # bugcenterApp
 *
 * Main module of the application.
 */
angular
  .module('bugcenterApp', ['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/login')
  $stateProvider.state('login',{
    url:'/login',
    templateUrl:"views/login.html",
    controller:"loginCtrl"
  }).state('list',{
    url:'/list',
    templateUrl:"views/list.html",
    controller:"listCtrl"
  })
}]);
