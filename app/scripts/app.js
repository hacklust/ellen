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
      .state('home',{
        // authRequired: true, // add this to routes that need authentication :D
        url: '/',
        templateUrl: 'views/mobilehome.html',
        controller: 'HomeCtrl'
      });
    $stateProvider
      .state('ellen', {
        url: '/ellen',
        templateUrl: 'views/ellen.html',
        controller: 'EllenCtrl'
      });

    $stateProvider
      .state('users',{
        url: '/users/:id',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      });

    $stateProvider
      .state('questions',{
        url: '/questions/:id',
        templateUrl: 'views/showquestion.html',
        controller: 'QuestionViewCtrl'
      });

    $stateProvider
      .state('answers', {
        url: '/answer/:qid/:id',
        templateUrl: 'views/answerview.html',
        controller: 'AnswerViewCtrl'
      });
    
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
  });

