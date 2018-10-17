import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute(attribute) {
    // fullName -> full_name
    return underscore(attribute);
  }
});
