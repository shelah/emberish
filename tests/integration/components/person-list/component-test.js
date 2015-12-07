import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// let something

// The second parameter is for your debugging, so you can see where you are.
// You could put another level in that if you wanted, say if you had a nested
// route
moduleForComponent('person-list', 'Integration | Component | person list', {
  integration: true,
  
  // if you wanted, you could do as in rspec:
  // beforeEach() {
  //   something  
  //},
  // afterEach() {
    
  //}
});

test('it renders', function(assert) {
  // Four assertions within this test. You really want that here because we have
  // an asynchronous action (the click() below) and if there's a bug before that 
  // we won't know the other tests didn't run. This is the only time "expect" is
  // used; it has a different meaning here than it has in rspec. That's why we
  // use assert.
  assert.expect(5);
  
  let favoritePerson = {
    login: 'person2',
    avatar_url: 'person2avatar'
  };
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let model = {
    people: [
      {
        login: 'person1',
        avatar_url: 'person1avatar'
      },
      favoritePerson
    ],
    favoritePerson: favoritePerson
  };
  this.set('model', model);
  
  // Here's the asynchronous action
  this.set('actions', {
    // Set up testing without the controller so you're just testing the component
    personFavorited(person) {
      assert.equal(person.login, 'person2');
    }
  });

  // Template block usage:
  this.render(hbs`
    {{#person-list 
      people=model.people 
      favoritePerson=model.favoritePerson
      onFavorite=(action 'personFavorited') as |person|}}
      
      <img src={{person.avatar_url}} height=50>Hi {{person.login}}
      
    {{else}}  
      I have no people at all.
    {{/person-list}}
  `);

  assert.equal(this.$('img').length, 2, 'should have two user image elements');
  
  let templateText = this.$('.person').text().trim();
  
  assert.ok(templateText.match(/person1/), 'person1 should be present');
  assert.ok(templateText.match(/person2/), 'person2 should be present');
  
  this.$('.person:nth-of-type(2)').click();
  
  let isFavorite = this.$('.person:nth-of-type(2)').hasClass('favorite');
  assert.ok(isFavorite, 'favorite class should be on person');
});

test('throws error if no favoritePerson',  function(assert) {
  assert.throws(function() {
    this.render(hbs`
      {{#person-list}}
        hi
      {{/person-list}}
    `);
  });
});