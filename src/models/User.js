// src/models/User.js
var m = require('mithril');

var Cognito = require('amazon-cognito-identity-js');

var poolData = {
    UserPoolId: 'eu-west-1_L52bqGTik',
    ClientId: '6d0rd8npg1dq6ks046e5lt8vp5'
};
var userPool = new Cognito.CognitoUserPool(poolData);

var User = {};
User.register = function(user) {
    var attributeList = [];

    var cognitoUser;
    userPool.signUp(user.email, user.password, attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
};

module.exports = User;
