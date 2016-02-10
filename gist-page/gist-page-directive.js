function gistPage (api, $stateParams) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'gist-page/gist-page.html',
    link: function (scope) {
      var gistId = $stateParams.gist;
      api.getGist(gistId).then(function(response){
        scope.gist = response;
      });

      scope.updateGist = function(){
        api.updateGist(scope.gist);
      };

      scope.deleteGist = function(){
        api.deleteGist(scope.gist);
      };
    }
  };
}

angular.module('gistr').directive('gistPage', ['api', '$stateParams', gistPage]);