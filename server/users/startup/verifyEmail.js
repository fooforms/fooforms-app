Meteor.startup(function () {

    Accounts.config({
        sendVerificationEmail: true
    });


    Accounts.emailTemplates.from = 'Fooforms Accounts <accounts@fooforms.com>';

    Accounts.emailTemplates.siteName = 'Fooforms';

    Accounts.emailTemplates.verifyEmail.subject = function (user) {
        return 'Confirm Your Email Address';
    };

    Accounts.emailTemplates.verifyEmail.text = function (user, url) {
        url = url.replace('#/', '');
        return 'click on the following link to verify your email address: ' + url;
    };
});
