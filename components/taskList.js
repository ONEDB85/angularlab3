(function () {

    var taskList = {

        templateUrl: "templates/taskList.html",

        controller: function (TaskService) {

            var vm = this;
            vm.addTask = function (task) {
                if (task && vm === vm) {
                    vm.taskList.push(task);
                    document.getElementById("addInput").value = "";
                };

            }
            vm.removeTask = function ($index) {
                vm.taskList.splice($index, 1);
            };

            vm.taskList = TaskService.getData();
        }
    }

    angular.module("app")
        .component("taskList", taskList);


}());