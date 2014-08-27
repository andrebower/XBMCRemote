'use strict';

angular.module('xbmcremoteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider,$compileProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|image):|data:image\//);
  });