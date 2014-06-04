var app = angular.module('myApp',['ngGrid']);
app.controller('MyCtrl', function($scope){
	$scope.myData = [{original: "2", preview: ""},
					 {original: "4", preview: ""},
					 {original: "8", preview: ""},
					 {original: "16", preview: ""},
					 {original: "32", preview: ""},
					 {original: "64", preview: ""},
					 {original: "128", preview: ""},
					 {original: "256", preview: ""},
					 {original: "512", preview: ""},
					 {original: "1024", preview: ""},
					 {original: "2048", preview: ""},
					 {original: "4096", preview: ""}];	
	$scope.gridOptions = {
		data: 'myData',
		rowHeight: 100,
		columnDefs: [{field: 'original', displayName: 'Original', width: 100},
		{field: 'preview', displayName: 'Preview', width: 100, cellTemplate: '<div ng-class="{test: row.getProperty(\'original\') == \'2\'}"><div class="ngCellText">{{row.getProperty(\'original\')}}</div></div>'}]
	};

});
// 		columnDefs: [{field: 'original', displayName: 'Original', width: 90},
//		{field: 'preview', displayName: 'Preview', width: 90, cellTemplate: '<div ng-class="{\'tile.tile-2-preview .tile-inner\': row.getProperty(\'preview\') == \'2.jpg\'}"><div class="ngCellText">{{row.getProperty(\'preview\')}}</div></div>'}]
//'imageTemplate.html'}]
//'<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="loadById(row)">{{row.getProperty(col.field)}}</a></div>' 