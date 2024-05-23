import { module, test } from 'qunit';
import { setupTest } from 'contact-manager/tests/helpers';

module('Unit | Controller | options', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:options');
    assert.ok(controller);
  });
});
