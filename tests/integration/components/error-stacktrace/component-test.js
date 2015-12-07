import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ErrorStacktrace from '../../../../components/error-stacktrace/component';

moduleForComponent('error-stacktrace', 'Integration | Component | error stacktrace', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  
  this.set('model', {
    stack: 'this is a stack'
  });

  this.render(hbs`{{error-stacktrace model=model}}`);

  assert.ok(this.$('.stacktrace').text().trim().match(/running in development/), 
    'should be in development mode');
});

test('it does not show stacktrace in production', function(assert) {
  ErrorStacktrace.reopen({
    isDevelopment: false
  });
  this.render(hbs`{{error-stacktrace model=model}}`);
  
  assert.equal(this.$('.stacktrace').length, 0, 'should be in development mode');
});
