var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var models = require('./models/images.js');
var ImagesList = require('./components/listing.jsx');

$('.nav-button').on('click', function(){
    $('.mainNavDropDown').slideToggle(500);
});

// var photos = new models.ImagesModel();
//   photos([
//     {}
//   ]);
//
// ReactDOM.render(
//   <ImagesList collection={photos}/>,
//   document.getElementById('imagePlace')
// );
