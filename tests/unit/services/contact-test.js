import { module, test } from 'qunit';
import { setupTest } from 'contact-manager/tests/helpers';

module('Unit | Service | contact', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:contact');
    assert.ok(service);
  });
});
