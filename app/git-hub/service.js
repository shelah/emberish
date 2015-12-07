import Ember from 'ember';

export const clientId = 'a8ff05b37508a46c5e33';
export const clientSecret = '83c5a86aafea65296801692cd6c62b9020361946';

const {
  service
} = Ember.inject;

export default Ember.Service.extend({
  ajax: service(),
  
  baseUrl: 'https://api.github.com',
  
  request (myurl, params) {
    let baseUrl = this.get('baseUrl');
    params = params || {};

    console.log(`git-hub service: params = ${params}`);
    params = Ember.merge(params, {
      'client_id': `${clientId}`,
      'client_secret': `${clientSecret}`
    });
    return this.get('ajax').request(`${baseUrl}${myurl}`, {
      data: params
    });
  }
  
});
