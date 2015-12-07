import Ember from 'ember';

const {
  service
} = Ember.inject;

export default Ember.Route.extend({
    greeting: service(),
    
    model() {
      let greeting = this.get('greeting');
      greeting.set('word', 'HEY!');
      return {
        greeting
      };
    }
});
