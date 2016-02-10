function gists (api) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'gists/gists.html',
    link: function (scope) {
      api.getGists().then(function(response){
        scope.gists = response;
      });
    }
  };
}

angular.module('gistr').directive('gists', ['api', gists]);