/* ---------------------------------------------------------------------------------------------- */
/* EJEMPLO DE SEFVICIO */
/* ---------------------------------------------------------------------------------------------- */

angular.module ('miApp', [])
    .service('miServicio', function(){
        
            this.mensaje= "mensaje desde el Servicio"
            this.modificando = function(dato){
                this.mensaje = dato
        }
    })
    .controller('miCtrl1', function($scope,miServicio){
        $scope.dato = miServicio
        $scope.nuevoDato = ''
        $scope.modificar = function(dato){
            /* $scope.dato = {mensaje:dato} */
            miServicio.modificando(dato)
        }
    })
    .controller('miCtrl2', function($scope,miServicio){
        $scope.dato = miServicio 
    })

/* ---------------------------------------------------------------------------------------------- */
/* EJEMPLO DE FABRICA */
/* ---------------------------------------------------------------------------------------------- */
/* 
angular.module ('miApp', [])
    .factory('miFabrica', function(){
        var fabrica = {
            mensaje: "mensaje desde la fabrica",
            modificando: function(dato){
                fabrica.mensaje = dato
            }
        }
        return fabrica
    })
    .controller('miCtrl1', function($scope,miFabrica){
        $scope.dato = miFabrica
        $scope.nuevoDato = ''
        $scope.modificar = function(dato){
            /* $scope.dato = {mensaje:dato} 
           miFabrica.modificando(dato)
         }
    })
    .controller('miCtrl2', function($scope,miFabrica){
        $scope.dato = miFabrica 
    }) */
 