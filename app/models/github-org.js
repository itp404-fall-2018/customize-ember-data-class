import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  isVerified: DS.attr('boolean'),
  publicRepos: DS.attr('number')
});
