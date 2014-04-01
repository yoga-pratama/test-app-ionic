angular.module('liverpool.services',[])

	.factory('LiverpolService', function($q){

	var players = [
	{"id":1, "firstName" : "Luis", "lastname":"Suarez","position":"Forward","birthday":"24 Jan 1987","inclub":"2011","pic":"suarez.jpg","Nationality":"Uruguay"},
	{"id":2, "firstName" : "Daniel","lastname":"Sturiddge","position":"Forward","birthday":"1 Sep 1989","inclub":"2013","pic":"sturridge.jpg","Nationality":"England"},
	{"id":3, "firstName" : "Phelipe","lastname":"Coutinho","position":"midfielder","birthday":"12 Jun 1992","inclub":"2011","pic":"coutinho.jpg","Nationality":"Brazil"},
	{"id":4, "firstName" : "Jordan","lastname":"Henderson","position":"midfielder","birthday":"17 Jun 1990","inclub":"2011","pic":"henderson.jpg","Nationality":"England"},
	{"id":5, "firstName" : "Raheem","lastname":"Sterling","position":"midfielder","birthday":"8 Dec 1994","inclub":"2011","pic":"sterling.jpg","Nationality":"England"},
	{"id":6, "firstName" : "Steven","lastname":"Gerrard","position":"midfielder","birthday":"14 Mar 1990","inclub":"2011","pic":"gerrard.jpg","Nationality":"England"},
	{"id":7, "firstName" : "Joe","lastname":"Allen","position":"midfielder","birthday":"","inclub":"2011","pic":"allen.jpg","Nationality":"Wales"},
	{"id":8, "firstName" : "Martin","lastname":"Skrtel","position":"Center Back","birthday":"15 Dec 1984","inclub":"2011","pic":"skrtel.jpg","Nationality":"Slovakia"},
	{"id":9, "firstName" : "Daniel","lastname":"Agger","position":"Center Back","birthday":"12 Dec 1984","inclub":"2011","pic":"agger.jpg","Nationality":"Denmark"},
	{"id":10, "firstName" : "Glen","lastname":"Johnson","position":"right back","birthday":"23 Aug 1984","inclub":"2011","pic":"johnson.jpg","Nationality":"England"},
	{"id":11, "firstName" : "John","lastname":"Flanagan","position":"left back","birthday":"1 Jan 1993","inclub":"2011","pic":"flanagan.jpg","Nationality":"England"},
	{"id":12, "firstName" : "Simon","lastname":"Mignolet","position":"Goal keeper","birthday":"6 Mar 1988","inclub":"2011","pic":"mignolet.jpg","Nationality":"Belgium"},
	];

	return {
		findAll : function(){
			var deffered = $q.defer();
			deffered.resolve(players);
			return deffered.promise;
		},

		findById : function(playerId){
			var deffered = $q.defer();
			var player = players[playerId - 1];
			deffered.resolve(player);
			return deffered.promise;
		},
		 findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = players.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastname;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            }

	}


	});