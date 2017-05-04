var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
	$scope.name = 'World';
	$scope.username = '';
    
    $scope.lowercaseUsername = function () {
		return $filter('lowercase')($scope.username);
	};
    
    $scope.checkCharacterCount = function () {
        return $scope.username.length > 3;
    };
    
    $scope.checkAlNum = function () {
        var pattern = /^[a-z0-9]+$/i;
        return pattern.test($scope.username);
    };
    
    $scope.checkCoolness = function () {
        var result = $scope.checkCharacterCount() && $scope.checkAlNum();
        return result;
    };
    
    $scope.rules = [
        {rulename: "Must be more than 3 characters.", checkFunction: $scope.checkCharacterCount},
        {rulename: "Must contain only alphabets and numbers.", checkFunction: $scope.checkAlNum},
        {rulename: "Must be cool.", checkFunction: $scope.checkCoolness}
    ];
    
}]);