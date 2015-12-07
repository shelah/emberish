import Ember from 'ember';

const {
  assert
} = Ember;

export default Ember.Component.extend({
  tagName: 'ul', // instead of the default div
  classNames: ['person-list'],
  
  favoritePerson: null,
  people: null,
  
  // You only need to use init here because we want a default for people, which
  // is an enumerable. If we don't have this init and we set people: [] like
  // any other property, then everything that uses this component will share the 
  // same data. The data sharing is only relevant for enumerables.
  init() {
    // ... is like splat * in Ruby
    this._super(...arguments); // From ES6, must always set up init like this
    this.people = this.people || [];
    // or this.set('people', this.people)
    assert('Must pass favoritePerson', this.favoritePerson);
  },
  
  // Any time any of the data on the template changes, this function will be hit.
//  didReceiveAttrs() {
//    debugger;
//  },
  
  actions: {
    setAsFavorite(person) {
      // See the template. onFavorite is a function pointer that's an attribute
      // on the component. It is plugged in on the template and the handler is
      // set there (personFavorited on the user controller)
      this.attrs.onFavorite(person);
    }
  }
  
});
