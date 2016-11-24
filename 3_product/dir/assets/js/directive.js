/**
 * Created by user on 2016/11/24.
 * angular directive
 */

//var app = angular.module('app', []);
app.directive('hello', function(){
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
}).directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
}).directive("helloWorld2",function(){
    return{
        restrict:'EAC',
        replace: true,
        template: function(tElement,tAttrs){
            var _html = '';
            _html += '<div>' +'hello '+tAttrs.title+'</div>';
            return _html;
        }
    };
}).directive('myDirective', function () {
    return {
        restrict: 'EA',
        scope:{},
        template: '<div>儿子:{{ name }}<input ng-model="name"/></div>'
    };
});
