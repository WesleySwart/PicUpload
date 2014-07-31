var app = angular.module('myGridApp',['ngGrid']);
app.controller('GridCtrl', function($scope){
	$scope.myData = [{original: "2", preview: ""},
					 {original: "4", preview: ""},
					 {original: "8", preview: ""}];	
	$scope.gridOptions = {
		data: 'myData',
		//rowHeight: 100,
		columnDefs: [{field: 'original', displayName: 'Original', width: 100},
		{field: 'preview', displayName: 'Preview', width: 100/*, cellTemplate: '<div ng-class="{test: row.getProperty(\'original\') == \'2\'}"><div class="ngCellText">{{row.getProperty(\'original\')}}</div></div>'*/},
		{field: 'edit', displayName: '', width: 10/*, cellTemplate: '<span class ="btn btn-original btn-file icon icon-edit" ng-controller="UploadCtrl"><form action="/uploads" ng-upload="completed(content)"><input type="file" name="avatar"></input><div style=\'cursor: pointer\' upload-submit></div></form></span>'*/}]
	};
});