var app = angular.module("task")

app.controller("getDetailsCtrl", function (getSvc, $scope) {

    $scope.getDetails = function (name) {
        getSvc.getList()
            .then(function (response) {
                $scope.totallist = response.items
            })
            .catch(function (response) {
                $scope.response = "error response"

            })
    }
    $scope.getDetails();

    $scope.order = function (list) {
        $scope.reverse = ($scope.list === list) ? !$scope.reverse : false;
        $scope.list = list;

    };

})
