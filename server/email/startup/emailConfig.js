Meteor.startup(function () {
    var smtp = {
        username: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD,
        server: process.env.EMAIL_SERVER,
        port: process.env.EMAIL_PORT
    };

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
