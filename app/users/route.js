import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

const {
  service
} = Ember.inject;

export default Route.extend({
  queryParams: {
    page: {
      // Do a full transition when the page property is updated instead of just 
      // updating the property
      refreshModel: true
    }
  },
  
  // If your service were my-greeting, it would be here as myGreeting, 
  // camel-case.
  greeting: service(),
  
  ajax: service(),
  
  activate() {
    console.log('activate');
  },

  beforeModel() {
    console.log('beforeModel');
  },

  model(params) {
    console.log(`UserRoute model: params = ${params}`);
    let greeting = this.get('greeting');      
    let people = this.get('gitHub').request('/repos/emberjs/ember.js/stargazers', params);

    return RSVP.hash({
      greeting,
      people,
      repoInfo: this.get('gitHub').request('/repos/emberjs/ember.js'),
    });
  },

  afterModel(model) {
    model.favoritePerson = model.people[6];
  }
});
