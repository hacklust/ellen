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

    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        // authRequired: true, // add this to routes that need authentication :D
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
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
      .state('ask', {
        url: '/ask',
        templateUrl: 'views/ask.html',
        controller: 'AskCtrl'
      });

    
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

    $stateProvider
      .state('final',  {
        url: '/final',
        templateUrl: 'views/final.html',
        controller: 'FinalCtrl'
      });

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });

