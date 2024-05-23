import { module, test } from 'qunit';
import { setupTest } from 'contact-manager/tests/helpers';

module('Unit | Route | options', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:options');
    assert.ok(route);
  });
});
