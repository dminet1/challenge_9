var myModule = angular.module("myModule", []);
myModule.controller("productsCtrl", function ($scope) {
    $scope.products = [
        new product("Tee-shirt", "Vêtement", "6.99€"),
        new product("Bracelet", "Bijou", "35.00€"),
        new product("Bermuda", "Vêtement", "14.75€")
    ];
    $scope.delete = function (idx) {
        var product_to_delete = $scope.products[idx];

        API.DeleteProduct({id: product_to_delete.id}, function (success) {
            $scope.products.splice(idx, 1);
        });
    };
    $scope.update = function (idx) {
        var product_to_update = $scope.products[idx];

        API.UpdateProduct({id: product_to_update.id}, function (success) {
            $scope.products.splice(idx, 1);
        });
    };
});
