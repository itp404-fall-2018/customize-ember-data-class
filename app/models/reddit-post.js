import DS from 'ember-data';

export default DS.Model.extend({
  authorFullname: DS.attr('string'),
  score: DS.attr('number'),
  title: DS.attr('string'),
  clicked: DS.attr('boolean')
});
