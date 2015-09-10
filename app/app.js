'use strict';

var latinSquaresGame = angular.module('latinSquaresGame',['ui.router', 'gridster']);

latinSquaresGame.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/age");
	$stateProvider
		.state('age', {
			url: "/age",
				views: {
					"viewA": {
						templateUrl: "partials/age.html"
					}
				}
		})
		.state('theGame', {
			url: "/theGame",
				views: {
					"viewA": {
						templateUrl: "partials/theGame.html"
					}
				}
		})
});
