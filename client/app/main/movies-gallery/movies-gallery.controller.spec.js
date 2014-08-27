'use strict';

describe('Controller: MoviesGalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('xbmcremoteApp'));

  var MoviesGalleryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesGalleryCtrl = $controller('MoviesGalleryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
