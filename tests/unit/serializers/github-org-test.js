import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | github org', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('github-org');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('github-org', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
