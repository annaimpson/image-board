var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

// var Models = require('./../models/images.js').ImagesCollection;
// var picturePost = new Models;
// console.log(picturePost);


var PictureForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleDropDown: function(e){
    e.preventDefault();
    $('.mainNavDropDown').slideToggle(500);
  },
  handleSubmit: function(){
    var postImage = $('.image-input').val();
    var postCaption = $('.caption-input').val();
    this.props.collection.create({
      url: postImage,
      caption: postCaption
    });

  },
  handleCancel: function(){
    $('.cancel-button').on('submit', function(e){
      e.preventDefault();
    });
  },
  render: function(){
    return(
      <div>
        <div className="toggle-button">
          <button onClick={this.handleDropDown} type="button" className="btn btn-default btn-lg nav-button">
            <span className="glyphicon glyphicon-plus-sign plus-sign" aria-hidden="true"></span>
          </button>
          <div>
            <div className="dropdownBox">
             <ul className = "mainNavDropDown clearfix">
               <form className ="form-group">
                  <input type="text" className="form-control image-input" placeholder="Image URL"/>
                  <input type="text" className="form-control caption-input" placeholder="Image Caption"/>
                </form>
              <button onClick={this.handleCancel} type="button" className="btn btn-default cancel-button">Cancel</button>
              <button onClick={this.handleSubmit} type="button" className="btn btn-default add-button">Add Image</button>
             </ul>
            </div>
         </div>
        </div>
      </div>
    );
  }
});

module.exports = PictureForm;
