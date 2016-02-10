function userCard() {
  return {
    restrict: 'E',
    scope: {
      gist: '='
    },
    templateUrl: 'user-card/user-card.html',
    link: function (scope) {}
  };
};

angular.module('gistr').directive('userCard', userCard);
