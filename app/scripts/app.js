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
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
    $stateProvider
      .state('ellen', {
        url: '/ellen',
        templateUrl: 'views/ellen.html',
        controller: 'EllenCtrl'
      });
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    $stateProvider
      .state('report', {
        url: '/report',
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      });

    $stateProvider
      .state('questions', {
        url: '/questions/:cat',
        templateUrl: 'views/questionsFilterByCategory.html',
        controller: 'QuestionCtrl'
      })
      .state('ask', {
        url: '/ask',
        templateUrl: 'views/ask.html',
        controller: 'QuestionCtrl'
      });

    $stateProvider
      .state('articles', {
        url: '/articles/:cat',
        templateUrl: 'views/articlesFilterByCategory.html',
        controller: 'ArticlesViewCtrl'
      });
      
    $stateProvider
      .state('article', {
        url: '/article/:id',
        templateUrl: 'views/articleView.html',
        controller: 'ArticleViewCtrl'
      });

    $stateProvider
      .state('users',{
        url: '/users/:id',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      });

    $stateProvider
      .state('question',{
        url: '/question/:id',
        templateUrl: 'views/showquestion.html',
        controller: 'QuestionViewCtrl'
      });

    $stateProvider
      .state('answers', {
        url: '/answer/:qid/:id',
        templateUrl: 'views/answerview.html',
        controller: 'AnswerViewCtrl'
      });
    
  });

