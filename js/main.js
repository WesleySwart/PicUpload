var app = angular.module('myApp',['ngGrid']);
app.controller('MyCtrl', function($scope){
	$scope.myData = [{original: "2", preview: '2.jpg'}];	
	$scope.gridOptions = {
		data: 'myData',
		columnDefs: [{field: 'original', displayName: 'Original', width: 90},
		{field: 'preview', displayName: 'Preview', width: 90, cellTemplate: '<div ng-class="{\'tile.tile-2-preview .tile-inner\': row.getProperty(\'preview\') == \'2.jpg\'}"><div class="ngCellText">{{row.getProperty(\'preview\')}}</div></div>'}]
	};

});
//'imageTemplate.html'}]
//'<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="loadById(row)">{{row.getProperty(col.field)}}</a></div>' 