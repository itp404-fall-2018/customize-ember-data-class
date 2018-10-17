import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | github-org', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:github-org');
    assert.ok(route);
  });
});
