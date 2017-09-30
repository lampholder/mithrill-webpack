// index.js
var m = require('mithril');

require('../css/style.css');

var MyComponent = require('./mycomponent.js');

m.mount(document.body, MyComponent);
