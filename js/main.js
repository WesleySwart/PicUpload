var app = angular.module('myApp',['ngGrid']);
app.controller('MyCtrl', function($scope){
	$scope.myData = [{original: "2", preview: ''}];	
	$scope.gridOptions = {
		data: 'myData',
		columnDefs: [{field: 'original', displayName: 'Original', width: 90},
		{field: 'preview', displayName: 'Preview', width: 90, cellTemplate: 'imageTemplate.html'}]
	};

});