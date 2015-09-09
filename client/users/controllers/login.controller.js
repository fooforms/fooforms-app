angular.module('fooforms').controller('LoginCtrl',
    ['$meteor', '$state',
        function ($meteor, $state) {
            var vm = this;

            vm.credentials = {
                email: '',
                password: ''
            };

            vm.error = '';

            vm.login = function () {
                $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
                    function () {
                        $state.go('dashboard');
                    },
                    function (err) {
                        vm.error = 'Login error - ' + err;
                        if (err.toString() === 'Error: Login forbidden [403]') {
                            $state.go('emailNotVerified', {
                                message: 'It appears your email has not been verified.' +
                                ' Please check your inbox or resend using the form below.'
                            });
                        }
                    }
                );
            };
        }
    ]);
