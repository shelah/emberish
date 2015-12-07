import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'emberish/tests/helpers/start-app';

module('Acceptance | user visits list of users', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /user-visits-list-of-users', function(assert) {
  visit('/users');
  
  let firstUser;
  let firstUserAfterPageChange;

  andThen(() => {
    // Find out what the first user is after the page has loaded
    firstUser = find('.person:first-child').text().trim();
    
    // assert that we have one disabled Previous button
    assert.equal(find('button:contains(Previous)[disabled]').length, 1, 
      'previous button should be disabled');
    assert.equal(currentURL(), '/users');
  });
      
  click('button:contains(Next)');
  
  andThen(() => {
    firstUserAfterPageChange = find('.person:first-child').text().trim();
    assert.equal(currentURL(), '/users?page=2');
    assert.equal(find('button:contains(Previous)[disabled]').length, 0, 
      'previous button should be enabled');
    assert.notEqual(firstUser, firstUserAfterPageChange);
  });
  
  click('button:contains(Previous)');
  
  andThen(() => {
    firstUserAfterPageChange = find('.person:first-child').text().trim();
    assert.equal(currentURL(), '/users');
    assert.equal(find('button:contains(Previous)[disabled]').length, 1, 
      'previous button should be disabled');
    assert.equal(firstUser, firstUserAfterPageChange); 
  });
  
});
