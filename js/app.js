/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['flow', 'ngGrid']);
  app.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
      target: '',
      permanentErrors: [500, 501],
      maxChunkRetries: 1,
      chunkRetryInterval: 5000,
      simultaneousUploads: 1
    };
    flowFactoryProvider.on('catchAll', function (event) {
      console.log('catchAll', arguments);
    });
    // Can be used with different implementations of Flow.js
    flowFactoryProvider.factory = fustyFlowFactory;
  }]);

//var gridApp = angular.module('myGridApp',['ngGrid']);
  app.controller('GridCtrl', function($scope){
    $scope.myData = [{index0: "0", index1: "1", index2: "2"}];  
    $scope.gridOptions = {
      data: 'myData',
      //rowHeight: 30,
      columnDefs: [{field: 'index0', displayName: 'Index0', width: 100},
      {field: 'index1', displayName: 'Index1', width: 100},
      {field: 'index2', displayName: 'Index2', width: 100}]
    };
  });