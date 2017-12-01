app.controller("verduraController", ["$scope", "verduraService", "categoriaService", "$location", "$rootScope", "md5", "$routeParams", "AuthenticationService", "$filter", "Upload", function ($scope, verduraService, categoriaService, $location, $rootScope, md5, $routeParams, AuthenticationService, $filter, Upload) {
    $scope.verdu = {};
    $scope.verduras = {};
    $scope.verduraModelo = {};

    $scope.modalEdited = false;
    $scope.modalAdded = false;

    $scope.categoriasPosibles = [];

    verduraService.dbGetVerdura().then(function (response) {
        $scope.verduras = response;
        angular.forEach(response, function (value, key) {
            $scope.verduras[key].fechaCaducidad = new Date(response[key].fechaCaducidad);
        });
    });

    categoriaService.dbGetCategoria().then(function (response) {
        angular.forEach(response, function (value, key) {
            var tmp = value.denominacion;
            $scope.categoriasPosibles.push(value.denominacion);
            //debugger;
        });
        //debugger;
    });

    $scope.register = function () {
        $scope.dataLoading = true;

        verduraService.dbPostVerdura($scope.verduraModelo)
            .then(function (response) {
                $scope.verduras.push($scope.verduraModelo);
                if (response) {
                    var tmpLocAct = $location.path();
                    if (tmpLocAct == "/registro") {
                        $location.path('/login');
                    }
                } else {
                    $scope.dataLoading = false;
                }
                $scope.verduraModelo = {};
                $scope.modalAdded = false;
                $scope.modalEdited = false;
            }, function errorCallback(response) {
                $scope.dataLoading = false;
                console.log("Error:" + response.status);
                //podriamos utilizar una libreria de alertas para angular como 
                //https://www.npmjs.com/package/angular-ui-notification
            });



    }

    $scope.borrarVerdura = function (index, elVerdura) {
        verduraService.dbBorrarVerdura(elVerdura).then(function (response) {
            $scope.verduras.splice(index, 1);
            $scope.modalEdited = false;
            $scope.modalAdded = false;
        });
    }

    $scope.oneSelected = function (index) {
        $scope.verduras[index].selected = true;
        $scope.modalAdded = false;
        $scope.modalEdited = true;
    }

    $scope.guardarVerdura = function (modalSelected, item) {
        $scope.modalEdited = false;
        $scope.modalAdded = false;

        //item.denominacion = $scope.categoriasPosibles;
        item.fechaCaducidad = new Date(item.fechaCaducidad);

        item.files = $scope.filesBase64 ? $scope.filesBase64[0] : '';

        debugger;
        //$scope.formattedDate = $filter('date')(item.fechaCaducidad, "dd/MM/yyyy");
        //item.fechaCaducidad = $scope.formattedDate;

        delete item.selected
        verduraService.dbPutVerdura(item).then(function (response) {

        });
    }

    $scope.oneAdded = function (valorMod) {
        $scope.modalAdded = valorMod;
        //$scope.verdura[index].selected = true;
    }

    $scope.agregarProducto = function () {
        var modal = $scope.verduras;
        modal.files = $scope.filesBase64 ? $scope.filesBase64[0] : ''; //mete files al modelo que se pasa al servicio

        ProductoService.dbPostProducto(modal).then(function (response) {
            $scope.productoS.push(response.data);
        });
    }

    $scope.hola = function () {
      
        //debugger
        //console.log("--edur<--");
        //console.log($scope.verduras);
        //console.log($scope.verdu);
        //console.log("----");
    }
    //upload de Productos
    $scope.$watch('verdu', function () {
        // debugger
        //if ($scope.filess){
        console.log($scope.verdu);
        debugger;
        $scope.upload($scope.verdu);
        //}
    });

    // $scope.$watch('file', function () {
    //     debugger;
    //     if ($scope.file != null) {
    //         $scope.files = [$scope.file]; 
    //     }
    // });

    //$scope.log = '';

    $scope.upload = function (files) {
        debugger;
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.$error) {
                    //Metodo para transformar objectos blob a Base64
                    Upload.base64DataUrl(files).then(function (urls) {
                        $scope.filesBase64 = urls;
                    });
                }
            }
        }
    };



}]);