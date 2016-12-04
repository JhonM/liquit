import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('attach-aroma', 'Integration | Component | attach aroma', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{attach-aroma}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#attach-aroma}}
      template block text
    {{/attach-aroma}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
