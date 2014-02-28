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

    // default
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        authRequired: true, // add this to routes that need authentication :D require to all
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
        authRequired: true,
        url: '/ellen',
        templateUrl: 'views/ellen.html',
        controller: 'EllenCtrl'
      });

    // static pages
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

    // dynamic pages: question

    $stateProvider
      .state('question',{
        authRequired: true,
        url: '/question/:id',
        templateUrl: 'views/singleQuestion.html',
        controller: 'singleQuestionCtrl'
      })
      .state('question.answers', {
        url: '/question/a/',
        templateUrl: 'views/answers.html',
        controller: 'QuestionAnswersCtrl'
      })
      .state('question.answer.id', {
        url: '/question/a/:id',
        templateUrl: '/views/singleAnswer.html'
      });

    $stateProvider
      .state('questions', {
        authRequired: true,
        url: '/questions',
        templateUrl: 'views/questions.html',
        controller: 'QuestionsCtrl'
      })
      .state('questions.category',{
        url: '/question/:cat',
      })
      .state('questions.ask', {
        url: '/questions/ask',
        templateUrl: 'views/ask.html',
        controller: 'QuestionCtrl'
      });

    // articles | similar to questions

    $stateProvider
      .state('article', {
        authRequired: true,
        url: '/article/:id',
        templateUrl: 'views/singleArticle.html',
        controller: 'SingleArticleCtrl'
      });
      
    $stateProvider
      .state('articles', {
        authRequired: true,
        url: '/articles',
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .state('articles.category', {
        url: '/articles/:cat'
      })
      .state('articles.write', {
        url: '/questions/write',
        templateUrl: 'views/write.html',
        controller: 'ArticleCtrl'
      });

    // users now

    $stateProvider
      .state('user', {
        authRequired: true,
        url: '/user/:id',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      });

  });

