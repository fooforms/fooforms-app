/**Router.map(function () {
    this.route('verifyEmail', {
        controller: 'AccountController',
        path: '/verify-email/:token',
        action: 'verifyEmail'
    }, {where: 'server'});
});

Router.route('/(.*)', function () {
    this.render('index');
});

AccountController = RouteController.extend({
    verifyEmail: function () {
        Accounts.verifyEmail(this.params.token, function (err) {
            if (err) {
                Router.go('/not-verified');
            } else {
                Router.go('/verified');
            }
        });
    }
});*/
