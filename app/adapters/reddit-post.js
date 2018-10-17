import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  urlForQuery(query, modelName) {
    let host = 'https://www.reddit.com';
    let url = `${host}/r/${query.subreddit}.json`;
    delete query.subreddit;
    return url;
  }
});
