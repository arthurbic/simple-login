angular.module('songhop.services', [])
.factory('User', function($http, SERVER) {

  var o = {
    id: '123456',
    token: '78910abcd',
    email: 'tommy@blanc.com',
    name: 'Tommy Blanc',
    picture_url: './img/ionic.png'
  };

  return o;
});