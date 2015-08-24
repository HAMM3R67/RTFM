angular.module('rtfmApp')
.controller('threadPageController', function($scope, $location, $routeParams, threadService, userService){
    var threadId = parseInt($routeParams.threadId);

    $scope.newComment = '';
    $scope.thread = threadService.getThread(threadId);

    console.log($scope.thread)  //this will be empty :(
    
    $scope.thread.$loaded().then(function (thread){
        console.log(thread);
    });

    $scope.addComment= function(){ 
        if(!$scope.newComment){
            return false; //Don't do anything if the text box is empty
        }       

        var currentUser = userService.getLoggedInUser();

        var newComment = {
            text: $scope.newComment,
            username: currentUser.name
        };

        $scope.thread.comments.push(newComment);
    
        $scope.newComment = ''; //Clear the input box
    }


});