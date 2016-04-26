var myModule = angular.module("myModule", []);
myModule.controller("productsCtrl", function ($scope) {
    $scope.products = [
        new product("Tee-shirt", "Vêtement", "6.99€"),
        new product("Bracelet", "Bijou", "35.00€"),
        new product("Bermuda", "Vêtement", "14.75€")
    ];
});

