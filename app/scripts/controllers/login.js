/**
 * Created by jingguanran on 2016/11/23.
 */
angular.module('bugcenterApp').controller("loginCtrl",['$rootScope','$scope','$state','$http',function($rootScope,$scope,$state,$http){
  $scope.submit=function(){
    $http({
      url:"http://www.bugcenter.com.cn:1511/users/login",
      method:"post",
      data:$scope.upuser
    }).success(function(e){
      $rootScope.user={}
      $rootScope.user.username=$scope.upuser.username
      $rootScope.user.uid= e.uid
        $state.go('list')
    })
  }
}])
