// index.js
var m = require('mithril');

require('./css/style.css');

var Registration = require('./views/Registration');
var Login = require('./views/Login');

m.route(document.body, '/login', {
    '/login': Login,
    '/register':  Registration
});
