app.controller("ofertaController",["$scope","ofertaService", "verduraService", "$location", "$rootScope","md5","$routeParams","AuthenticationService",function($scope, ofertaService, verduraService, $location, $rootScope,md5,$routeParams,AuthenticationService){
    
// Novedad: Inyecto 2 servicios

    $scope.ofertas = {};
    $scope.ofertaModelo={};

    $scope.ofertasPosibles = [];

    ofertaService.dbGetOferta().then(function(response){
        $scope.ofertas = response;
    });

    verduraService.dbGetVerdura().then(function(response){
        angular.forEach(response, function(value, key) {
            //var tmp = response.descripcion;
            $scope.ofertasPosibles.push(response[key].descripcion);
        });
    });



    $scope.register = function(){
            $scope.dataLoading = true; // Controla la posible "demora" de respuesta
    
            ofertaService.dbPostOferta($scope.ofertaModelo)
                .then(function (response) {
                    $scope.ofertas.push($scope.ofertaModelo);
                    if (response) {
                    } else {
                        $scope.dataLoading = false;
                    }
                    $scope.ofertaModelo = {};

                    // renueva el $scope porque sino agrega $$hashKey, no me 
                    // funcionó el ng-repeat con la solución de track by
                    ofertaService.dbGetOferta().then(function(response){
                        $scope.ofertas = response;
                    });
                
            

                }, function errorCallback(response){
                    $scope.dataLoading = false;
                    console.log("Error:"+response.status);
                });  
    }

    $scope.borrarOferta = function(index,laOferta){

        ofertaService.dbBorrarOferta(laOferta).then(function(response){
            $scope.ofertas.splice(index,1);
        });
    }

 
}]);   