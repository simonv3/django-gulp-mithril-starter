/**
 * The Index Models
 */

var buildURL = require('./utils/buildURLs');
var vndJSON = require('./utils/requestVndApiJson');

var index = {};

index.controller = function() {
  index.vm.init();
};

// Set the view model for the index
index.vm = (function(){
  var vm = {};
  vm.init = function(){
    // Whatever we need to init the flow here.
  };
  return vm;
}());

index.view = function(controller) {
  return m("div", {class: 'content index'}, [
    m("div", { class: "account-menu" },
      m("h1", ["Index"]),
        m("a", { href: '/accounts/logout/',
               class: 'btn btn-secondary' }, 'log out')

      ),
  ]);
};

module.exports = index;
