app.controller("categoriaController",["$scope","categoriaService", "$location", "$rootScope","md5","$routeParams","AuthenticationService",function($scope, categoriaService, $location, $rootScope,md5,$routeParams,AuthenticationService){
    
// Novedad: Inyecto 2 servicios

    $scope.categorias = {};
    $scope.categoriaModelo={};

    $scope.categoriasPosibles = [];

    categoriaService.dbGetCategoria().then(function(response){
        $scope.categorias = response;
    });


    $scope.register = function(){
            $scope.dataLoading = true; // Controla la posible "demora" de respuesta
    
            categoriaService.dbPostCategoria($scope.categoriaModelo)
                .then(function (response) {
                    $scope.categorias.push($scope.categoriaModelo);
                    if (response) {
                    } else {
                        $scope.dataLoading = false;
                    }
                    $scope.categoriaModelo = {};

                    // renueva el $scope porque sino agrega $$hashKey, no me 
                    // funcionó el ng-repeat con la solución de track by
                    categoriaService.dbGetCategoria().then(function(response){
                        $scope.categorias = response;
                    });
                
            

                }, function errorCallback(response){
                    $scope.dataLoading = false;
                    console.log("Error:"+response.status);
                });  
    }

    $scope.borrarcategoria = function(index,lacategoria){

        categoriaService.dbBorrarCategoria(lacategoria).then(function(response){
            $scope.categorias.splice(index,1);
        });
    }

 
}]);   