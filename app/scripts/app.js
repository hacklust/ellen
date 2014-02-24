'use strict';

angular.module('ellenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  });
