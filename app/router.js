import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pair');
  this.route('fifteen');
  this.route('enter');
  this.route('help');
  this.route('closed');
});

export default Router;
