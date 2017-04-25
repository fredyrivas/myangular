
var miapp = angular.module("repostest", []);

miapp.controller("miController", function ($scope, $http) {


    $scope.calluser = function () {

        $http.get("https://api.github.com/users/" + $scope.username + "/repos")
            .then(function (data) {

                $scope.myrepos = data.data;

            }, function () {
                console.log('error');
            });
    }

});


