import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Mixin.create({
  page: 1,
  per_page: 30,

  totalPages: computed('totalRecords', 'per_page', function() {
    let totalRecords = this.get('totalRecords');
    return Math.ceil(totalRecords / this.get('per_page'));
  }),
  
  isFirstPage: computed.equal('page', 1),
  isLastPage: computed('totalPages', 'page', function() {
    let totalPages = this.get('totalPages');
    let page = this.get('page');
    return totalPages === page;
  }),
  
  actions: {
    previousPage() {
      let page = this.get('page');
      this.set('page', page - 1);
    },
    nextPage() {
      let page = this.get('page');
      this.set('page', page + 1);
    }
  }
});
