var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');


var PictureForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    console.log(this.props.model)
    return (
      <div>
          <div className = "col-xs-12 col-md-12">
            <div className ="background"></div>
          </div>
          <div className = "col-xs-12 col-md-10 image-place" id="imagePlace">
            <img src={this.props.model.get('url')} alt="pic" />
            <p>{this.props.model.get('caption')}</p>
          </div>
        </div>
    );
  }
});

var PictureListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var PictureList = this.props.collection.map(function(model){
      return (
        <PictureForm model = {model} key={model.get('_id')}/>
      )
    });
    return (
      <div className="row text-center">
        {PictureList}
      </div>
    );
  }
});

module.exports = PictureListing;
