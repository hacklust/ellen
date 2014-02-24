'use strict';

angular.module('ellenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    var access = routingConfig.accessLevels;

    // public routes
    $stateProvider
      .state('public', {
        abstract: true,
        template: '<ui-view/>'
      })
      .state('public.404', {
        url: '/404/',
        templateUrl: '404'
      });
    // anonymous routes
    $stateProvider
      .state('anon', {
        abstract: true,
        template: '<ui-view/>'
      })
      .state('anon.login', {
        url: '/login/',
        templateUrl: 'login',
        controller: 'LoginCtrl'
      });
  });
