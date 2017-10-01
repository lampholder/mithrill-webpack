var m = require('mithril');
var User = require('../models/User');

var Registration = {};

var viewModel = {
    email: null,
    password: null
};

Registration.view = function(ctrl) {
    return m('.registration', {}, [
               m('h1.registration-h1', 'Register'),
               m('.row', [
                   m('label.registration-label',
                     {for: 'email'},
                     'Email'),
                   m('input.registration-input.registration-input-email',
                     {id: 'email',
                      type: 'email',
                      placeholder: 'email@example.com',
                      value: viewModel.email,
                      oninput: m.withAttr("value", function(value) {viewModel.email = value;}),
                     }),
               ]),
               m('.row', [
                   m('label.registration-label',
                     {for: 'password'},
                     'Password'),
                   m('input.registration-input.registration-input-password',
                     {id: 'password',
                      type: 'password',
                      placeholder: 'password',
                      value: viewModel.password,
                      oninput: m.withAttr("value", function(value) {viewModel.password = value;}),
                     })
               ]),
               m('button.registration-button',
                 {onclick: function() {
                               User.register(viewModel);
                                      }
                 },
                 'Register'
               )
    ]);
};

module.exports = Registration;
