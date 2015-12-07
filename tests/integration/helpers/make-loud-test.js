import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('make-loud', 'Integration | Helper | make-loud', {
  integration: true,
});

test('it returns strong if format bold', function(assert) {
  this.render(hbs`{{make-loud 'hello' format='bold'}}`);
  
  assert.equal(this.$().html(), '<strong>hello</strong>');
});

test('returns uppercase by default', function(assert) {
  this.render(hbs`{{make-loud 'hello'}}`);
  assert.equal(this.$().text().trim(), 'HELLO');
});