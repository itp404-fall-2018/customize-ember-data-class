import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute(attribute, method) {
    return underscore(attribute);
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    payload.id = payload.login;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
