var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var models = require('./models/images.js');
console.log();
var ImagesList = require('./components/listing.jsx');
var ImageForm = require('./components/form.jsx');

var images = new models.ImagesCollection();

images.fetch();
  ReactDOM.render(
    React.createElement(ImagesList, {collection: images}),
    document.getElementById('app')
  );

ReactDOM.render(
  React.createElement(ImageForm, {collection: images}),
  document.getElementById('header')
);
