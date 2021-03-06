angular.module('fooforms').controller('ResetCtrl',
    ['$meteor', '$state',
        function ($meteor, $state) {
            var vm = this;

            vm.credentials = {
                email: ''
            };

            vm.error = '';

            vm.reset = function () {
                $meteor.forgotPassword({email: vm.credentials.email}).then(
                    function () {
                        $state.go('site');
                    },
                    function (err) {
                        vm.error = 'Error sending forgot password email - ' + err;
                    }
                );
            };
        }
    ]);
