/// <reference path="../../Scripts/angular.js" />

(function (angular) {
	"use strict";
	var app = angular.module("myApp", ["myData", "myMessages", "ngRoute"]);

	app.config(["$routeProvider", function ($routeProvider) {
		$routeProvider.when("/movies", {
			controller: "MoviesListCtrl",
			templateUrl: "/templates/movieList.html",
			resolve: {
				movies: ["Movie", function (Movie) {
					return Movie.query();
				}]
			}
		});
		
		$routeProvider.when("/movies/:id", {
			controller: "MoviesEditorCtrl",
			templateUrl: "/templates/movieEditor.html",
			resolve: {
				selectedMovie: ["Movie", "$route", function (Movie, $route) {
					return Movie.get({ id: $route.current.params.id });
				}],
				directors: ["Director", function (Director) {
					return Director.query();
				}],
				countries: ["Country", function (Country) {
					return Country.query();
				}]
			}
		});
		$routeProvider.otherwise({
			redirectTo: "/movies"
		});
	}]);


	app.controller("MoviesListCtrl", ["$scope", "$location", "movies",
		function ($scope, $location, movies) {
			$scope.movies = movies;

			$scope.select = function (movie) {
				$location.path("/movies/" + movie.id);
			};
		}
	]);

	app.controller("MoviesEditorCtrl", ["$scope", "$location", "selectedMovie", "directors", "countries", "myMessage",
		function ($scope, $location, selectedMovie, directors, countries, myMessage) {
			$scope.errorMessage = null;
			$scope.selectedMovie = selectedMovie;
			$scope.thisYear = new Date().getFullYear();

			$scope.directors = directors;
			$scope.countries = countries;

			$scope.save = function () {
				$scope.selectedMovie.$save().then(function () {
					myMessage.info("Saved " + $scope.selectedMovie.title);
					$location.path("/movies");
				}, function (e) {
					$scope.errorMessage = e.data.error;
				});
			};

			$scope.cancel = function () {
				$location.path("/movies");
			};
		}
	]);

	app.directive('innerText', function () {
	    return {
	        scope: {
	            innerText: '@'
	        },
	        link: function (scope, element) {
	            scope.$watch('innerText', function (value) {
	                element.text(value);
	            });
	        }
	    };
	});

}(window.angular));
