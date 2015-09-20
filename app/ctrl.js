'use strict';

latinSquaresGame.controller('ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

	$scope.ngGridsterItems = [
		{ 
			size: { x: 2, y: 3 }, position: [0, 0], id: 0
		},
		{ 
			size: { x: 2, y: 3 }, position: [0, 2], id: 1
		},
		{ 
			size: { x: 2, y: 3 }, position: [0, 4], id: 2
		},
		{ 
			size: { x: 2, y: 3 }, position: [0, 6], id: 3
		},
		{ 
			size: { x: 2, y: 3 }, position: [2, 0], id: 4
		},
		{ 
			size: { x: 2, y: 3 }, position: [2, 2], id: 5
		},
		{ 
			size: { x: 2, y: 3 }, position: [2, 4], id: 6
		},
		{ 
			size: { x: 2, y: 3 }, position: [2, 6], id: 7
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 0], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 2], id: 9
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 4], id: 10
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 6], id: 11
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 0], id: 12
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 2], id: 13
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 4], id: 14
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 6], id: 15
		}
	];

	$scope.ngGridsterItemsMap = {
		sizeX: 'item.size.x',
		sizeY: 'item.size.y',
		row: 'item.position[0]',
		col: 'item.position[1]',
		id: 'item.id'
	};
	$scope.ngGridsterOpts = {
		columns: 8,
		pushing: false,
		floating: true,
		swapping: true,
		width: 'auto',
		colWidth: 'auto',
		rowHeight: '55',
		margins: [15, 15],
		outerMargin: true,
		isMobile: false,
		mobileBreakPoint: 300,
		mobileModeEnabled: false,
		minColumns: 1,
		minRows: 1,
		maxRows: 22,
		defaultSizeX: 2,
		defaultSizeY: 3,
		minSizeX: 1,
		maxSizeX: null,
		minSizeY: 1,
		maxSizeY: null,
		resizable: {
		   enabled: false,
		   handles: ['s', 'e', 'n', 'w', 'se', 'ne', 'sw', 'nw'],
		   start: function(event, $element, widget) {},
		   resize: function(event, $element, widget) {},
		   stop: function(event, $element, widget) {}
    	},
	    draggable: {
	       enabled: true,
	       handle: '',
	       start: function(event, $element, widget) {},
	       drag: function(event, $element, widget) {},
	       stop: function(event, $element, widget) {}
	    }
	};

	$scope.ngGridsterImageGal = [
		{
		    src: "img/d2.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 0
		},
		{
		    src: "img/j3.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 1
		},
		{
		    src: "img/a1.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 2
		},
		{
		    src: "img/d1.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 3
		},
		{
		    src: "img/j2.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 4
		},
		{
		    src: "img/a4.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 5
		},
		{
		    src: "img/d4.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 6
		},
		{
		    src: "img/a3.png",
		    show: false,
		    animate: false,
			firstPage: false,
		    id: 7
		},
		{
			src: "img/k3.png",
			show: false,
			animate: false,
			firstPage: true,
			id: 8
		},
		{
			src: "img/k2.png",
			show: false,
			animate: false,
			firstPage: true,
			id: 9
		},
		{
			src: "img/k1.png",
			show: false,
			animate: false,
			firstPage: true,
			id: 10
		},
		{
			src: "img/j4.png",
			show: false,
			animate: false,
			firstPage: false,
			id: 11
		},
		{
			src: "img/j1.png",
			show: false,
			animate: false,
			firstPage: true,
			id: 12
		},
		{
			src: "img/d3.png",
			show: false,
			animate: false,
			firstPage: false,
			id: 13
		},
		{
			src: "img/a2.png",
			show: false,
			animate: false,
			firstPage: false,
			id: 14
		},
		{
			src: "img/k4.png",
			show: false,
			animate: false,
			firstPage: false,
			id: 15
		},
	];


$scope.testMouseDown = function(ngGridsterImageGal){
	$('.theGameContent').transition({ y: 10, opacity: 0.25 }, 250, 'easeOutQuad' );
	for (var i = $scope.ngGridsterImageGal.length - 1; i >= 0; i--) {
		if (ngGridsterImageGal.id === $scope.ngGridsterImageGal[i].id) {
			$scope.ngGridsterImageGal[i].show = true;
			$scope.ngGridsterImageGal[i].animate = true;
		};
	};

}
$scope.testMouseUp = function(ngGridsterImageGal){
	$('.theGameContent').transition({ y: 0, opacity: 1 }, 250, 'easeOutQuad' );
	for (var j = $scope.ngGridsterImageGal.length - 1; j >= 0; j--) {
		$scope.ngGridsterImageGal[j].show = false;
		$scope.ngGridsterImageGal[j].animate = false;
	};
}


}]); // КОНЕЦ КОНТРОЛЛЕРА
