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
			size: { x: 2, y: 3 }, position: [4, 2], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 4], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [4, 6], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 0], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 2], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 4], id: 8
		},
		{ 
			size: { x: 2, y: 3 }, position: [6, 6], id: 8
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
		rowHeight: 'match',
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
		    src: "img/bg.jpg",
		    id: 1
		},
		{
		    src: "img/bg.jpg",
		    id: 2
		},
		{
		    src: "img/bg.jpg",
		    id: 3
		},
		{
		    src: "img/bg.jpg",
		    id: 4
		},
		{
		    src: "img/bg.jpg",
		    id: 5
		},
		{
		    src: "img/bg.jpg",
		    id: 6
		},
		{
		    src: "img/bg.jpg",
		    id: 7
		},
		{
		    src: "img/bg.jpg",
		    id: 8
		},
		{
			src: "img/bg.jpg",
			id: 9
		},
		{
			src: "img/bg.jpg",
			id: 10
		},
		{
			src: "img/bg.jpg",
			id: 11
		},
		{
			src: "img/bg.jpg",
			id: 12
		},
		{
			src: "img/bg.jpg",
			id: 13
		},
		{
			src: "img/bg.jpg",
			id: 14
		},
		{
			src: "img/bg.jpg",
			id: 15
		},
		{
			src: "img/bg.jpg",
			id: 16
		},
	];

	$scope.testMouseOver = function(item){
		console.log(item.id);
	}




}]); // КОНЕЦ КОНТРОЛЛЕРА
