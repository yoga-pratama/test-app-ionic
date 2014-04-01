// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('liverpool', ['ionic','liverpool.controller','liverpool.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    StatusBar.styleDefault();
    });
  })

  .config(function ($stateProvider, $urlRouterProvider){
  	$stateProvider
  	     .state('player-index',{
  	     	url: '/players',
  	     	templateUrl:'templates/player.html',
  	     	controller: 'PlayerIndexCtrl'
  	     })
         .state('player-detail',{
          url:'/player/:playerId',
          templateUrl: 'templates/player_detail.html',
          controller :'PlayerDetailCtrl'
         });

  	     $urlRouterProvider.otherwise('/players');
  });

