app.directive('buscador', [function() {
    return {
        templateUrl:'./directivas/templates/buscador.html',
        restrict: 'E',
        scope: {
        busqueda: '='
        }
    };
}]);