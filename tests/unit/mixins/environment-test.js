import Ember from 'ember';
import EnvironmentMixin from '../../../mixins/environment';
import { module, test } from 'qunit';

module('Unit | Mixin | environment');

// Replace this with your real tests.
test('it works', function(assert) {
  var EnvironmentObject = Ember.Object.extend(EnvironmentMixin);
  var subject = EnvironmentObject.create();
  assert.ok(subject);
});
