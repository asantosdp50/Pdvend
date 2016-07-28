'use strinct';

var app = angular.module("app", []);

app.controller('PdvendController', [
	'$scope',
	'$http',
    '$timeout',
    function ($scope, $http, $timeout) {

        //$scope.getVendas = function () {
        //    $http.get('/Pdvend/Get')
        //    .success(function (data) {
        //        $scope.Vendas = data;
        //        $scope.getDatas();
        //        ativarRefresh();
        //    });

        //}

        $scope.getVendas = function () {
            $scope.Vendas = [
                {
                    Id: 1,
                    Data: "3 JUL",
                    CPF: "1234567890",
                    Gerente: "Fernando",
                    DataVenda: "3 Julho 10hr 51 mim",
                    Vendedor: "Marcelo",
                    ValorVenda: "2000",
                    LucroBruto: "678",
                    NotaFiscal: "6548762938098",
                    TipoPagamento: "1"
                },
                {
                    Id: 2,
                    Data: "3 JUL",
                    CPF: "1234567890",
                    Gerente: "Fernando",
                    DataVenda: "3 Julho 10hr 51 mim",
                    Vendedor: "Marcelo",
                    ValorVenda: "2000",
                    LucroBruto: "678",
                    NotaFiscal: "6548762938098",
                    TipoPagamento: "3"
                },
                {
                    Id: 3,
                    Data: "3 JUL",
                    CPF: "1234567890",
                    Gerente: "Fernando",
                    DataVenda: "3 Julho 10hr 51 mim",
                    Vendedor: "Marcelo",
                    ValorVenda: "2000",
                    LucroBruto: "678",
                    NotaFiscal: "6548762938098",
                    TipoPagamento: "2"
                },
                {
                    Id: 4,
                    Data: "2 JUL",
                    CPF: "1234567890",
                    Gerente: "Fernando",
                    DataVenda: "3 Julho 10hr 51 mim",
                    Vendedor: "Marcelo",
                    ValorVenda: "2000",
                    LucroBruto: "678",
                    NotaFiscal: "6548762938098",
                    TipoPagamento: "2"
                },
                {
                    Id: 5,
                    Data: "1 JUL",
                    CPF: "1234567890",
                    Gerente: "Fernando",
                    DataVenda: "3 Julho 10hr 51 mim",
                    Vendedor: "Marcelo",
                    ValorVenda: "2000",
                    LucroBruto: "678",
                    NotaFiscal: "6548762938098",
                    TipoPagamento: "3"
                }
            ]
        }

        $scope.Deletar = function (index) {
            $scope.Vendas.splice(index, 1);
        }

        $scope.Init = function () {
            $scope.getVendas();
        };

        $scope.Init();

        if ($scope.Vendas != undefined) {
            $scope.DataVendas = [];
            var j = 0;
            for (var i = 0; i < $scope.Vendas.length; i++) {
                if ($scope.DataVendas[j - 1] != $scope.Vendas[i].Data) {
                    {
                        $scope.DataVendas[j] = $scope.Vendas[i].Data;
                        j++
                    }
                }
            }
        }

        //function ativarRefresh() {
        //    $scope.getVendas();
        //    $timeout(ativarRefresh, 1000);
        //}

        
    }]);

