import Ember from 'ember';

export function eq([param1, param2]/*, hash*/) {
  return param1 === param2;
}

export default Ember.Helper.helper(eq);
