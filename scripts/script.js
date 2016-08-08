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
 (function(){
app = angular.module('search',[]);
app.controller('searchCtrl', ['$scope', '$http', function($scope,$http) {
	$scope.placeholder ="Camera";
	$scope.filter = {
		fil:'popular'
	};
	$http.get('/resources/products.json').then(function(data){
			$scope.cameraData=data.data;
		},function(error){
			$scope.cameraData=error;
		});
		
	}]);
})();