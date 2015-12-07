import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eq', 'Integration | Helper | eq', {
  integration: true,
});

test('it works as a subexpression', function(assert) {
  this.render(hbs`
    {{#if (eq 1 1)}}
      hi
    {{/if}}
  `);
  
  assert.equal(this.$().text().trim(), 'hi');
});

test('returns false if not equal', function(assert) {
  this.render(hbs`
    {{#if (eq 2 1)}}
      hi
    {{/if}}
  `);
  
  assert.notOk(this.$().text().trim().match(/hi/));
});

test('it returns true if equal', function(assert) {
  this.render(hbs`{{eq 1 1}}`);
  
  assert.equal(this.$().text().trim(), 'true');
});