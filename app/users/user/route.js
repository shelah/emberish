import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('gitHub').request(`https://api.github.com/users/${params.login}`);
  }
});
