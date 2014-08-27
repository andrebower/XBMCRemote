'use strict';

angular.module('xbmcremoteApp')
  .controller('MoviesGalleryCtrl', function ($scope,$http) {
    $http.get('/api/movies').success(function(data){
    	$scope.movies = data;
    });
	// var socket = io();

  });
