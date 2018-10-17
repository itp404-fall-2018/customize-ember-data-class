import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  urlForFindRecord(id) {
    let url = `https://api.github.com/orgs/${id}`;
    return url;
  }
});
