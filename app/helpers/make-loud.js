import Ember from 'ember';

export function makeLoud([thing], hash) {
  if (hash.format === 'bold') {
    return new Ember.Handlebars.SafeString(`<strong>${thing}</strong>`);
  } else {
    return thing.toUpperCase();
  }
}

// This is exporting the function so you could use it anywhere in your app.
export default Ember.Helper.helper(makeLoud);
