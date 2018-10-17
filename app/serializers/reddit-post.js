import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute(attribute) {
    // attribute = fullName
    // fullName -> full_name
    return underscore(attribute);
  },
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    // customize it
    payload = payload.data.children.map(item => {
      return item.data;
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
