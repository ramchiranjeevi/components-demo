import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('parentchild');
  this.route('complifecycle');
  this.route('mutable');
});

export default Router;
