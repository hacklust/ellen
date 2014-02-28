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
  'simpleLoginTools'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    
    // .when('/user', {
    //   templateUrl: 'views/user.html',
    //   controller: 'UserCtrl'
    // })
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        // authRequired: true, // add this to routes that need authentication :D
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
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

