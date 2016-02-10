function newGistForm (api, $state) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'new-gist-form/new-gist-form.html',
    link: function (scope) {
      scope.gist = {
        files: []
      };
      scope.fileCount = 1;
      scope.newFile = function(){
        scope.fileCount++
      };
      scope.getNumber = function(num) {
        return new Array(num);
      };

      scope.createGist = function(){
        var cleanFiles = {};

        scope.gist.files.forEach(function(file){
          cleanFiles[file.filename] = {content: file.content};
        });

        scope.gist.files = cleanFiles;

        api.createGist(scope.gist).then(function(response){
          $state.go('gist', {gist: response.id});
        });
      }
    }
  };
}

angular.module('gistr').directive('newGistForm', ['api', '$state', newGistForm]);