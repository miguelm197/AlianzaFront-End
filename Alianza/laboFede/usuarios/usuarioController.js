app.controller("usuarioController",["$scope","usuarioService", "$location", "$rootScope","md5","$routeParams","AuthenticationService",function($scope, usuarioService, $location, $rootScope,md5,$routeParams,AuthenticationService){

    $scope.usuarios = {};
    $scope.usuarioModelo={};
    //$scope.roleTmp = "";

    $scope.modalEdited = false;
    $scope.modalAdded = false;

    $scope.RolesPosibles = ['admin', 'public'];
    

    usuarioService.dbGetUsuarios().then(function(response){
        $scope.usuarios = response;
    });


    $scope.register = function(){
            $scope.dataLoading = true;
            //Encriptamos la password con md5
            var md5UserPassword= md5.createHash($scope.usuarioModelo.password);
            $scope.usuarioModelo.password = md5UserPassword;
            console.log($rootScope.userRole);

            // Siempre se registra como public, sólo un admin lo edita y lo cambia como admin
            $scope.usuarioModelo.role = "public"
            usuarioService.dbPostUsuario($scope.usuarioModelo)
                .then(function (response) {
                    $scope.usuarios.push($scope.usuarioModelo);
                    if (response) {
                        var tmpLocAct = $location.path();
                        if (tmpLocAct=="/registro") {
                            $location.path('/login');
                        }
                    } else {
                        $scope.dataLoading = false;
                    }
                    $scope.usuarioModelo = {};
                    $scope.modalAdded = false;
                    $scope.modalEdited = false;
                }, function errorCallback(response){
                    $scope.dataLoading = false;
                    console.log("Error:"+response.status);
                    //podriamos utilizar una libreria de alertas para angular como 
                    //https://www.npmjs.com/package/angular-ui-notification
                });
    


    //    var modal = $scope.usuarioModelo;
        //  modal.id =  se encarga la api
    //    usuarioService.dbPostUsuario(modal).then(function(response){
    //        $scope.usuarios.push(response.data);
    //    });
    }
    $scope.borrarUsuario = function(index,elUsuario){
        usuarioService.dbBorrarUsuario(elUsuario).then(function(response){
            $scope.usuarios.splice(index,1);
            $scope.modalEdited = false;
            $scope.modalAdded = false;
        });
    }
    $scope.oneSelected = function(index){
        $scope.usuarios[index].selected = true;
        $scope.modalAdded = false;
        $scope.modalEdited = true;
    }
    $scope.guardarUsuario = function(itemGuardado,item){
        $scope.modalEdited = false;
        $scope.modalAdded = false;
        //debugger;
        //$scope.usuarios[itemGuardado].role = $scope.roleTmp;
        delete item.selected
        usuarioService.dbPutUsuario(item).then(function(response){
           
        });
    }
    $scope.oneAdded = function(valorMod){
        $scope.modalAdded = valorMod;
        //$scope.usuarios[index].selected = true;
    }


/*
    $scope.ofertas = {};    
    ofertaService.dbGetOferta().then(function(response){
        $scope.ofertas = response;
        console.log(response);
    });
*/

}]);