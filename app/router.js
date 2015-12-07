import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    // colon is special syntax to say this is going to be a request parameter
    this.route('user', { path: ':login' });
  });
  this.route('change-greeting');
  this.route('application-error');
});

export default Router;
