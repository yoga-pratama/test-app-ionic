angular.module('liverpool.controller', [])

.controller('PlayerIndexCtrl', function ($scope, LiverpolService){
   
   $scope.searchKey = "";

    

   $scope.clearSearch = function (){
   	 $scope.searchKey = "";
   	 findAllPlayers();
   }

   $scope.search = function () {
            LiverpolService.findByName($scope.searchKey).then(function (players) {
                $scope.players = players;
            });
        }

   var findAllPlayers = function(){
   	 LiverpolService.findAll().then(function (players){
   	 	$scope.players = players;
   	 });
   }
 
 	findAllPlayers();


})

.controller('PlayerDetailCtrl',function ($scope,$stateParams, LiverpolService){
	LiverpolService.findById($stateParams.playerId).then(function(player){
		$scope.player = player;
	});

});