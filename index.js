let app = angular.module("myApp", [])

app.controller("myCtrl", function ($scope) {
    $scope.form = {"codigo":null, "horas":null, "tarifa":null}
    $scope.sueldoBruto = 0
    $scope.descuento = 0

    $scope.calcular = function () {
        $scope.sueldoBruto = $scope.form.horas * $scope.form.tarifa
        if ($scope.sueldoBruto <= 500) {
            $scope.descuento = 0
        }else if($scope.sueldoBruto >= 500 && $scope.sueldoBruto <= 1000){
            $scope.descuento = $scope.sueldoBruto * 2 /100
        }else if($scope.sueldoBruto >= 1001 && $scope.sueldoBruto <= 4000){
            $scope.descuento = $scope.sueldoBruto * 8 / 100
        }else if($scope.sueldoBruto >= 4001 && $scope.sueldoBruto <= 8000){
            $scope.descuento = $scope.sueldoBruto * 15 / 100
        }else if($scope.sueldoBruto >= 8001 && $scope.sueldoBruto <= 10000){
            $scope.descuento = $scope.sueldoBruto * 21 / 100
        }else{
            $scope.descuento = $scope.sueldoBruto * 30 / 100
        }
    }
})

