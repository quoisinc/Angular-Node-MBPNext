var itineraryData = {"GetItineraryByRecordLocatorResult": {				   "OperationContext": null,
	   "ResponseStatusCode": 0,
	   "HasErrors": false,
	   "Errors": null,
	   "ExtendedProperties": null,
	   "Itinerary":    {
	      "RecordLocator": "DCUFJY",
	      "IsNonRevBooking": false,
	      "Customers": [      {
	         "CustomerSequence": "01.01",
	         "LoyaltyID": "",
	         "Name":          {
	            "NamePreffix": null,
	            "FirstName": "Charles",
	            "MiddleName": null,
	            "LastName": "Jackson",
	            "NameSuffix": null
	         },
	         "PersonalCharacteristics":          {
	            "BirthDate": "/Date(-575064000000-0400)/",
	            "Gender": 1,
	            "CustomerAgeType": 1
	         },
	         "Addresses": [],
	         "PhoneNumbers": [],
	         "EmailAddresses": [         {
	            "EmailAddress": "X@X.COM",
	            "EmailType": 0,
	            "Order": 0
	         }],
	         "IsCheckedIn": false
	      },
	      {
	         "CustomerSequence": "01.01",
	         "LoyaltyID": "",
	         "Name":          {
	            "NamePreffix": null,
	            "FirstName": "Kate",
	            "MiddleName": null,
	            "LastName": "Jackson",
	            "NameSuffix": null
	         },
	         "PersonalCharacteristics":          {
	            "BirthDate": "/Date(-575064000000-0400)/",
	            "Gender": 1,
	            "CustomerAgeType": 1
	         },
	         "Addresses": [],
	         "PhoneNumbers": [],
	         "EmailAddresses": [         {
	            "EmailAddress": "X@X.COM",
	            "EmailType": 0,
	            "Order": 0
	         }],
	         "IsCheckedIn": false
	      }],
	      "Legs":       [
	                  {
	            "LegSequence": "002",
	            "FlightKey":             {
	               "OperatingAirlineCode": "B6",
	               "FlightNumber": "0755",
	               "FlightDate": "/Date(1318305600000-0400)/",
	               "DepartureAirport": "JFK",
	               "ArrivalAirport": "AUA"
	            },
	            "ScheduledDepartureDateTime": "/Date(1318335300000-0400)/",
	            "ScheduledArrivalDateTime": "/Date(1318351800000-0400)/",
	            "EstimatedDepartureDateTime": "/Date(1318335300000-0400)/",
	            "EstimatedArrivalDateTime": "/Date(1318351080000-0400)/",
	            "ActualDepartureDateTime": "/Date(1318334760000-0400)/",
	            "ActualArrivalDateTime": "/Date(1318350780000-0400)/",
	            "LegStatus": "ARRIVED",
	            "Seats": [],
	            "ConnectionIndicator": "_O"
	         },
	                  {
	            "LegSequence": "003",
	            "FlightKey":             {
	               "OperatingAirlineCode": "B6",
	               "FlightNumber": "0758",
	               "FlightDate": "/Date(1318305600000-0400)/",
	               "DepartureAirport": "AUA",
	               "ArrivalAirport": "JFK"
	            },
	            "ScheduledDepartureDateTime": "/Date(1318366500000-0400)/",
	            "ScheduledArrivalDateTime": "/Date(1318383480000-0400)/",
	            "EstimatedDepartureDateTime": "/Date(1318366500000-0400)/",
	            "EstimatedArrivalDateTime": "/Date(1318382880000-0400)/",
	            "ActualDepartureDateTime": "/Date(1318366440000-0400)/",
	            "ActualArrivalDateTime": "/Date(1318382640000-0400)/",
	            "LegStatus": "ARRIVED",
	            "Seats": [],
	            "ConnectionIndicator": "I_"
	         }
	      ],
	      "SegmentInformation": [      {
	         "Key": "002",
	         "Value":          {
	            "SegmentSequence": "002",
	            "LegSequenceStart": "002",
	            "LegSequenceEnd": "003",
	            "SegmentType": 0,
	            "CountdownHoursToSTD": -531.2963382859999,
	            "CountdownHoursToETD": -531.2963382859999
	         }
	      }],
	      "StationInformation":       [
	                  {
	            "Key": "JFK",
	            "Value":             {
	               "Name": "New York J F Kennedy International Apt",
	               "IATACode": "JFK",
	               "AltCode": "KJFK",
	               "LocationType": 0,
	               "Status": false,
	               "City": "New York City",
	               "State": "NY",
	               "CountryCode": "US",
	               "Region": "US",
	               "IsJetBlueCity": true,
	               "IsInterlineCity": false,
	               "Latitude": 40.6397,
	               "Longitude": -73.7788,
	               "Terminal":                {
	                  "DomesticArrival": "5",
	                  "DomesticDeparture": "5",
	                  "InternationalArrival": "4",
	                  "InternationalDeparture": "5"
	               },
	               "CurrentVarianceMinutes": 240
	            }
	         },
	                  {
	            "Key": "AUA",
	            "Value":             {
	               "Name": "Aruba",
	               "IATACode": "AUA",
	               "AltCode": "TNCA",
	               "LocationType": 0,
	               "Status": false,
	               "City": "Aruba",
	               "State": "00",
	               "CountryCode": "AW",
	               "Region": "CA",
	               "IsJetBlueCity": true,
	               "IsInterlineCity": false,
	               "Latitude": 12.5013,
	               "Longitude": -70.0152,
	               "Terminal":                {
	                  "DomesticArrival": "USA Dep",
	                  "DomesticDeparture": "USA Dep",
	                  "InternationalArrival": "USA Dep",
	                  "InternationalDeparture": "USA Dep"
	               },
	               "CurrentVarianceMinutes": 240
	            }
	         }
	      ],
	      "WeatherInformation":       [
	                  {
	            "Key": "JFK",
	            "Value":             {
	               "StationCode": "JFK",
	               "LastUpdateDateTimeUTC": "/Date(1320259322300-0400)/",
	               "RecordDateTime": "/Date(1320242400000-0400)/",
	               "RecordDateVariance": -240,
	               "CurrentTemp": 49,
	               "CurrentTempUnits": "F",
	               "ApparentTemp": null,
	               "ApparentTempUnits": null,
	               "WindSpeed": 5,
	               "WindSpeedUnits": "mph",
	               "WindDirection": 60,
	               "WindDirectionUnits": "degrees true",
	               "WeatherString": "Fair",
	               "Visibility": 10,
	               "VisibilityUnits": "miles",
	               "Humidity": 66,
	               "HumidityUnits": "percent",
	               "Sky": "",
	               "Icon": "FAIR"
	            }
	         },
	                  {
	            "Key": "AUA",
	            "Value":             {
	               "StationCode": "AUA",
	               "LastUpdateDateTimeUTC": "/Date(1320247967349)/",
	               "RecordDateTime": "/Date(1320242400000-0400)/",
	               "RecordDateVariance": -240,
	               "CurrentTemp": 86,
	               "CurrentTempUnits": "F",
	               "ApparentTemp": 97,
	               "ApparentTempUnits": "F",
	               "WindSpeed": 13,
	               "WindSpeedUnits": "mph",
	               "WindDirection": 100,
	               "WindDirectionUnits": "degrees true",
	               "WeatherString": "A Few Clouds",
	               "Visibility": null,
	               "VisibilityUnits": "miles",
	               "Humidity": 75,
	               "HumidityUnits": "percent",
	               "Sky": "",
	               "Icon": "CLOUDY"
	            }
	         }
	      ]
	   }
	}};