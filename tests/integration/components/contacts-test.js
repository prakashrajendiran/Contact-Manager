import { module, test } from 'qunit';
import { setupRenderingTest } from 'contact-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contacts', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Contacts />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Contacts>
        template block text
      </Contacts>
    `);

    assert.dom().hasText('template block text');
  });
});
