var app = angular.module("task")
app.service("getSvc", function ($http, $q) {
    var list = localStorage.getItem('data1')
    // var getlist =
    this.getList = function () {
        var dfd = $q.defer();
        if (!list) {
            $http({
                method: "GET",
                url: "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
            })
                .then(function (response) {
                    list = response.data
                    localStorage.setItem("data1", JSON.stringify(list))
                    dfd.resolve(list)

                })
                .catch(function (response) {
                    dfd.reject = response
                })
        }
        else {
            dfd.resolve(JSON.parse(list))
        }
        return dfd.promise
    }

})
