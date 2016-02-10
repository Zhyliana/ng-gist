function gistCard($state) {
  return {
    restrict: 'E',
    scope: {
      gist: '='
    },
    templateUrl: 'gist-card/gist-card.html',
    link: function (scope) {
      scope.seeGist = function(gistId){
        $state.go('gist', {gist: gistId});
      }

    }
  };
};

angular.module('gistr').directive('gistCard', ['$state', gistCard]);
