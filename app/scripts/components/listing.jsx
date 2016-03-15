var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var PictureForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>Hello!</div>
    );
  }
});

var ImageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    imageList = this.getCollection().map(function(image){
      return <ImageItself model={image} />
    });

    return (
      <ul>
        {imageList}
      </ul>
    )
  }
});
