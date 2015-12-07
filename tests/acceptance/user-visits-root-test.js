import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberish/tests/helpers/start-app';

module('Acceptance | user visits root', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('should transition to /users', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});
