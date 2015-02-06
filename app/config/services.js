angular.module('webServices', ['ngResource'])
	.factory('ItineraryService', function($resource) {
		// alert('in ItineraryService');
		return $resource('/itineraryService');
	})
	.factory('EligibibleForCheckinService', function($resource){
		return $resource('/eligibibleForCheckinService');
	});
	