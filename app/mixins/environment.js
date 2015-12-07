import Ember from 'ember';
import Config from '../config/environment';

const {
  computed
} = Ember;

export default Ember.Mixin.create({
  isDevelopment: computed(function() {
    return Config.environment !== 'production';
  })
});
