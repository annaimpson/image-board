var $ = require('jquery');
var Backbone = require('backbone');

var ImagesModel = Backbone.Model.extend({
});

var ImagesCollection = Backbone.Collection.extend({
  model: ImagesModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/anna2'
});

module.exports = {
  ImagesModel: ImagesModel,
  ImagesCollection: ImagesCollection
};
