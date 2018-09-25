app.controller("myctrl",($scope,myfactory)=>{
  var obj;
   $scope.addRecord=()=>{
     myfactory.addTask($scope.name,$scope.desc);
       console.log(myfactory.taskArray);
       $scope.tasks = myfactory.taskArray;
   };
    $scope.deleteRecord =()=>{
        myfactory.deleteTask();
        $scope.tasks = myfactory.taskArray;
    };
    $scope.searchRecord =()=>{
      $scope.tasks =  myfactory.searchRecord($scope.name);
    };
//    $scope.fetchRecord = ()=>{
//        obj = myfactory.receiveValue();
//        $scope.name = obj.name;
//        $scope.desc = obj.desc;
//
//    };
    $scope.updateRecord =()=>{
        myfactory.updateRecord($scope.name,$scope.desc,obj);
        $scope.tasks = myfactory.taskArray;
    };
    $scope.editRecord =(task)=>{
        task.toggleEdit();
        obj = myfactory.receiveValue();
        $scope.name = obj.name;
        $scope.desc = obj.desc;
    };
    $scope.totalCount = ()=>{
        return myfactory.taskArray.length;
    };
    $scope.selectedField = ()=>{
        return myfactory.selectedFields();
    };
    $scope.unselectedField = ()=>{
        return myfactory.unselectedField();
    }
});