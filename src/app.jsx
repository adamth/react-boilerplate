const React = require('react');
const ReactDOM = require('react-dom');
const { 
    Route, 
    Router, 
    IndexRoute, 
    hashHistory 
} = require('react-router');


ReactDOM.render(
    <p className="button hollow">Boilerplate 3</p>,
    document.getElementById('app')
);

// Load foundation
$(document).foundation();

// app.css

require('./styles/app.scss');
