angular.module('gistr', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: "/",
        template: '<gists></gists>'
      })
      .state('gist', {
        url: "/gist?gist",
        template: '<gist-page></gist-page>'
      })
      .state('new', {
        url: "/new",
        template: '<new-gist-form></new-gist-form>'
      });
  }]);
