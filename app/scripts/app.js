'use strict';

angular.module('ellenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools',
  'ionic'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        authRequired: false,
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });

    $stateProvider
      .state('login', {
        authRequired: false,
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

    $stateProvider
      .state('home', {
        authRequired: false,
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });

    $stateProvider
      .state('post', {
        authRequired: false,
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      });
  });
