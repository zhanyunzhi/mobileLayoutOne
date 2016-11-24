/**
 * Created by user on 2016/11/24.
 * angular启动模块
 */

var app = angular.module('app', []);
app.controller('appController', function($scope){
    var vm = $scope.vm = {};
    vm.t = '1';
    $scope.title = '点击展开11';
    $scope.text = '这里是内部的内容。';
    $scope.name = 'zyz';
})
