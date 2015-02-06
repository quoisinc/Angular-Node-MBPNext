/**
* Main JS for application
*/

var MBP = angular.module('MBP',['webServices'])
	.config(appRouter);

MBP.service('itineraryDetails',function(){
	var customers = [];
	var departureCity;
	var recordLocator;

});

function appRouter($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'src/partials/checkIn.html',controller:'checkInCtrl'})
		.when('/travellerList',{templateUrl:'src/partials/travellerList.html',controller:'travellerListCtrl'})
        .when('/addTrueBlueNumber',{templateUrl:'src/partials/addTrueBlueNumber.html',controller:'addTrueBlueNumberCtrl'})
        .when('/reviewFlights',{templateUrl:'src/partials/reviewFlights.html',controller:'reviewFlightsCtrl'});
}

appRouter.$inject = ['$routeProvider'];