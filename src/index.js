// index.js
var m = require('mithril');

require('./css/style.css');

var Registration = require("./views/Registration");
m.mount(document.body, Registration);
