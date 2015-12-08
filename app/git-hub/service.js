import Ember from 'ember';

export const clientId = 'myclientid';
export const clientSecret = 'myclientsecret';

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
