'use strict'

angular.module('ellenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMockE2E'
])
  .config ($routeProvider, $locationProvider, $httpProvider) ->
    checkLoggedin = ($q, $http, $location, $rootScope) ->
      def = $q.defer()
      $http.get('http://localhost/ellentest/api/loggedin.php').success((user) ->
        console.log user
        if user isnt '0'
          def.resolve
        else
          $rootScope.message = 'Please log in'
          def.reject()
          $location.url '/'
      )
      return def.promise
    $httpProvider.interceptors.push ($q, $location) ->  
      (promise) ->
        promise.then((res) ->
          console.log res
          res
        ,
          (res)->
            console.log res
            $q.reject(res)
        )
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/secured',
        templateUrl: 'views/secured.html'
        controller: 'SecuredCtrl'
        resolve: 
          loggedin: checkLoggedin
      .otherwise
        redirectTo: '/'
  .run ($httpBackend) ->
    $httpBackend.whenGET('views/main.html').passThrough()
    $httpBackend.whenGET('views/secured.html').passThrough()
    $httpBackend.whenGET('http://localhost/ellentest/api/loggedin.php').passThrough()
