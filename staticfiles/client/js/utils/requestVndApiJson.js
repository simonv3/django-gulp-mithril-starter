module.exports = function(xhr) {
// console.log(xhr.headers);
  xhr.setRequestHeader("Accept","application/vnd.api+json");
  xhr.setRequestHeader("Content-Type", "application/json");
};
