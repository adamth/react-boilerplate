const React = require('react');
const ReactDOM = require('react-dom');
const { 
    Route, 
    Router, 
    IndexRoute, 
    hashHistory 
} = require('react-router');


ReactDOM.render(
    <p>Boilerplate!</p>,
    document.getElementById('app')
);

// Load foundation
$(document).foundation();

// app.css

require('./styles/app.scss');
