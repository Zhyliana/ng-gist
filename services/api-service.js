function api($http){
  var accessToken = '?access_token=9fc5ba413b1cab18821c08bff51288c8546c3c58';
  function getGists(){
    var url = 'https://api.github.com/users/clariture-test/gists' + accessToken;
    return $http.get(url).then(function(response) {
      return response.data;
    });
  }

  function getGist(gistId){
    var url = 'https://api.github.com/gists/' + gistId + accessToken;

    return $http.get(url).then(function(response) {
      return response.data;
    });
  }

  function createGist(gist){
    var url = 'https://api.github.com/gists' + accessToken;

    return $http.post(url, {gist}).then(function(response) {
      return response.data;
    });
  }

  function updateGist(gist){
    var url = 'https://api.github.com/gists/' + gist.id + accessToken;

    return $http.patch(url, gist).then(function(response) {
      return response.data;
    });
  }

  function deleteGist(gist){
    var url = 'https://api.github.com/gists/' + gist.id + accessToken;

    return $http.delete(url).then(function(response) {
      return response.data;
    });
  }

  function starGist(gist){
    var url = 'https://api.github.com/gists/star' + gist.id + accessToken;

    return $http.put(url).then(function(response) {
      return response.data;
    });
  }
  return {
    getGists: getGists,
    getGist: getGist,
    createGist: createGist,
    updateGist: updateGist,
    deleteGist: deleteGist
  };
}

angular.module('gistr').service('api', api);