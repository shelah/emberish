import Ember from 'ember';
import Pagination from '../mixins/pagination';

const {
  computed
} = Ember;

export default Ember.Controller.extend(Pagination, {
  queryParams: ['page', 'per_page'],
  
  totalRecords: computed.readOnly('model.repoInfo.stargazers_count'),
  
  actions: {
    personFavorited(person) {
      this.set('model.favoritePerson', person);
      
      // Usually you just pass the ID, not the login. But if you're transitioning
      // and you pass it something, you're saying this is the model. Do 
      // person.login instead of person and it will fetch the model.
      this.transitionToRoute('users.user', person.login);
    }
  }
 
});
