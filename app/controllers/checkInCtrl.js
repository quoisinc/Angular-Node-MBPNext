function checkInCtrl ($scope, $location, $http, itineraryDetails) {
	$scope.submitChekInInfo = function(){
		if($scope.lastName === undefined || $scope.lastName === " "){
			$scope.errorMsg = "Last Name is a mandatory field."
		}
		else if($scope.cNumber === undefined || $scope.cNumber == ""){
			$scope.errorMsg = "Confirmation number is a mandatory field.";
		}
		else{
			var itineraryBody = {
                "ItineraryByRecordLocatorRequest" : {
                                "OperationContext" : {
                                                "ConsumerID" : "JBSDK"
                                },
                                "RecordLocator" : $scope.cNumber,
                                "LastName" : $scope.lastName,
                                "ItineraryInfoOptions" : {
                                                "ReturnFlightStatusInfo" : true,
                                                "ReturnStationInfo" : true,
                                                "ReturnConnectionIndicators" : true,
                                                "ReturnSegmentInfo" : true,
                                                "ReturnCustomerCheckedInStatus" : true,
                                                "ReturnCustomerInfo" : true,
                                                "ReturnDepartureWeatherInfo" : true,
                                                "ReturnArrivalWeatherInfo" : true,
                                                "ReturnBoardingPassInfo" : true,
                                                "WeatherType" : "current"
                                }
                }
        	};
			var itineraryURL = 'URL/JBES/v2_0/ItineraryService_v2_1/Service.svc/JSON/GetItineraryByRecordLocator';
			var itineraryResponse = $http.post(itineraryURL, itineraryBody);
			itineraryResponse.success(function (data, status, headers, config) {
				var itineraryResult = data.GetItineraryByRecordLocatorResult;
				console.log(JSON.stringify(itineraryResult));
				if(itineraryResult.HasErrors){
				 	$scope.errorMsg = itineraryResult.Errors;
				}
				else{
					if(itineraryResult.Itinerary && itineraryResult.Itinerary != null){
						itineraryDetails.customers = itineraryResult.Itinerary.Customers;
						itineraryDetails.recordLocator = itineraryResult.Itinerary.RecordLocator;
	    				$location.url('/travellerList');
					}
					else{
						$scope.errorMsg = "Oops! Sorry, something went wrong during your check-in process. Please try again.";
					}
					
				}
			});
			itineraryResponse.error(function (data, status, headers, config) {
					$scope.errorMsg = "Oops! Sorry, something went wrong during your check-in process. Please try again.";
			});
			
		}
	}
	
}
