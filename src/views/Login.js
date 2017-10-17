var m = require('mithril');
var User = require('../models/User');

var Login = {};

var viewModel = {
    email: null,
    password: null
};

Login.view = function(ctrl) {
    return m('.login', {}, [
               m('h1.registration-h1', 'Login'),
               m('.login-registration-row', [
                   m('span.login-register-blurb', {}, 'I don\'t have an account - '),
                   m('a.login-register-link', {href: '/#!/register'}, 'register here')
               ]),
               m('.row', [
                   m('label.login-label',
                     {for: 'email'},
                     'Email'),
                   m('input.login-input.login-input-email',
                     {id: 'email',
                      type: 'email',
                      placeholder: 'email@example.com',
                      value: viewModel.email,
                      oninput: m.withAttr("value", function(value) {viewModel.email = value;}),
                     }),
               ]),
               m('.row', [
                   m('label.login-label',
                     {for: 'password'},
                     'Password'),
                   m('input.login-input.login-input-password',
                     {id: 'password',
                      type: 'password',
                      placeholder: 'password',
                      value: viewModel.password,
                      oninput: m.withAttr("value", function(value) {viewModel.password = value;}),
                     })
               ]),
               m('button.login-button',
                 {onclick: function() {
                               User.login(viewModel);
                                      }
                 },
                 'Login'
               )
    ]);
};

module.exports = Login;
