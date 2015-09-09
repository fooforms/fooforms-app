angular.module('fooforms').controller('RegisterCtrl',
    ['$meteor', '$state',
        function ($meteor, $state) {
            var vm = this;

            vm.credentials = {
                email: '',
                password: ''
            };

            vm.error = '';

            vm.register = function () {
                $meteor.createUser(vm.credentials).then(
                    function () {
                        $state.go('site');
                    },
                    function (err) {
                        vm.error = 'Registration error - ' + err;
                        if (err.toString() === 'Error: Login forbidden [403]') {
                            $state.go('emailVerificationSent');
                        }
                    }
                );
            };
        }
    ]);
