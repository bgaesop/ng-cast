angular.module('video-player')
  .component('search', {
    bindings: {
      search: '=',
      result: '<',
      setter: '='
    },
    templateUrl: 'src/templates/search.html'
  });
