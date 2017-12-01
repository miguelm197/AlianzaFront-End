app.controller("inicioController",["$scope","ofertaService", "verduraService", "categoriaService", "$location", "$rootScope","md5","$routeParams","AuthenticationService",function($scope, ofertaService, verduraService, categoriaService, $location, $rootScope,md5,$routeParams,AuthenticationService){
    
// Novedad: Inyecto 2 servicios

    $scope.ofertas = [];
    $scope.categorias = [];
    $scope.productos = [];

    ofertaService.dbGetOferta().then(function(response){
        $scope.ofertas = response;
    });

    categoriaService.dbGetCategoria().then(function(response){
        $scope.categorias = response;
    });

    verduraService.dbGetVerdura().then(function(response){
        angular.forEach(response, function(value, key) {
            $scope.productos.push({descripcion: response[key].descripcion, categoria: response[key].categoria});
        });
        //debugger;
    });

 
}]);   