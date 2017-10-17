// src/models/User.js
var m = require('mithril');

var Cognito = require('amazon-cognito-identity-js');

var COMPANY_NAME = 'acme';

var poolData = {
    UserPoolId: 'eu-west-1_58XkXQ32W',
    ClientId: '5l9m7qjfovoavah9abkgbn1d29'
};
var userPool = new Cognito.CognitoUserPool(poolData);

var User = {};
User.register = function(user) {
    var cognitoUser;
    var emailData = {
        Name: 'email',
        Value: user.email
    };

    var emailAttribute = Cognito.CognitoUserAttribute(emailData);

    userPool.signUp(COMPANY_NAME + '-' + user.email, user.password, [emailAttribute], null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
};

User.login = function(user) {
    var userNmae = COMPANY_NAME + '-' + user.email;

    var cognitoUser = new Cognito.CognitoUser({Username: userName,
                                               Pool: userPool});
    var auth = new Cognito.AuthenticationDetails({Username: userName,
                                                  Password: user.password});
    cognitoUser.authenticateUser(auth, {
        onSuccess: function(result) {
            alert('yep, you\'re a good\'un');
        },
        onFailure: function(err) {
            alert(err);
        }
    });
};

module.exports = User;
