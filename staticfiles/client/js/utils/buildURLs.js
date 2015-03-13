/*
 * A utility method for building and abstracting the
 * building of the URLs needed to access the API.
 */

module.exports = function(endpoint, parameters){
  var url = '';
  if (endpoint === 'search/external'){
    url = '/api/' + endpoint + '/' + parameters.q + '/';
  }
  else{
    url = '/api/' + endpoint + '/' + parameters.id + '/';
  }
  if (parameters.tags){
    url += '?tags=' + parameters.tags;
  }
  return url;
};
