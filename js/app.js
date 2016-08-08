(function() {
 app = angular.module('jcpenny',['ngRoute','search']);
 
 app.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider){

 	$routeProvider.
 	when('/search',{
 		templateUrl:'partials/search.html',
 		controller:'searchCtrl'
 	}).
 	otherwise({
 		templateUrl:'partials/search.html',
 		controller:'searchCtrl'
 	})
 }]);

})();