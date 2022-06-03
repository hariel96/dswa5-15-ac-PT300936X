angular.module('ifsp').factory('Contato', ["$resource", function($resource) {
    return $resource('/contatos/:id');
}]);

angular.module('ifsp').factory('Curso', ["$resource", function($resource) {
    return $resource('/cursos/:id');
}]);