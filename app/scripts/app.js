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
        authRequired: true,
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });

    $stateProvider
      .state('home', {
        authRequired: true,
        url: '/home',
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

    // the bot

    $stateProvider
      .state('ellen', {
        authRequired: true,
        url: '/ellen',
        templateUrl: 'views/ellen.html',
        controller: 'EllenCtrl'
      });

    // the community

    $stateProvider
      .state('post', {
        authRequired: true,
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      });


    // the user

    $stateProvider
      .state('user', {
        authRequired: true,
        url: '/user/:id',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      });

    // miscellaneous
    $stateProvider
      .state('about', {
        authRequired: true,
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    $stateProvider
      .state('report', {
        authRequired: true,
        url: '/report',
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      });

    $stateProvider
      .state('questions', {
        authRequired: true,
        url: '/questions',
        templateUrl: 'views/home.html',
        controller: 'QuestionsCtrl'
      });

  });
