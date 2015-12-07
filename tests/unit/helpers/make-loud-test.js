import { makeLoud } from '../../../helpers/make-loud';
import { module, test } from 'qunit';

module('Unit | Helper | make loud');

// Replace this with your real tests.
test('it works', function(assert) {
  let hash = {};
  let thing = "mystring";
  let result = makeLoud([thing], hash) === thing.toUpperCase();
  
  assert.ok(result, `${thing} != ${thing.toUpperCase()}`);
});
