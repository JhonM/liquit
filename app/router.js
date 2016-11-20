import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('aromas', function(){
    this.route('new');
    this.route('edit', {path: '/edit/:aroma_id'});
  });
  this.route('recipes', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
