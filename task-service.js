(function () {

    function TaskService() {

        var vm = this;
        vm.taskList = [];

        return {
            setData: setData,
            getData: getData
        }


        function getData() {
            return vm.taskList;
        }

        function setData(list) {
            vm.taskList = list;
        }

    }

    angular
        .module("app")
        .factory("TaskService", TaskService);
})();