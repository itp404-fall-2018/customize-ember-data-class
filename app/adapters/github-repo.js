import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  urlForQuery(query, modelName) {
    let host = 'https://api.github.com';
    let url = `${host}/orgs/${query.organization}/repos`;
    delete query.organization;
    return url;
  }
});
