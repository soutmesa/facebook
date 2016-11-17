angular.module('lynda_bk', ['ui.router'])
// Routes
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(false);
	$urlRouterProvider.otherwise("/");
	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/login_signup.html",
      controller: 'loginSignupController'
    })
}])

// .run(['$rootScope', function($rootScope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         $rootScope.title = current.$$route.title;
//     });
// }])

// Controller
.controller('loginSignupController',['$scope', '$http', 'fbFactory', '$stateParams', function($scope, $http, fbFactory, $stateParams){
  
}])
