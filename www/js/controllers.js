angular.module('songhop.controllers', ['ionic', 'songhop.services'])


/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope) {

})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope) {

})


.controller('ProfileCtrl', function($scope, User) {
  $scope.user = User
})


.controller('SplashCtrl', function($scope, $state, User) {

  })



/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope, User) {

});