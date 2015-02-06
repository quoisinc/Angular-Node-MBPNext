function travellerListCtrl($scope, EligibibleForCheckinService, itineraryDetails){
	
	$scope.travellerList = itineraryDetails.customers;

}

travellerListCtrl.$inject = ['$scope', 'EligibibleForCheckinService', 'itineraryDetails'];