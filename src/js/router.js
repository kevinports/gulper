var indexView = require('./views/index'),
    profileView = require('./views/profile');

module.exports = Backbone.Router.extend({
  initialize: function(){
    // this.bind('all', this._trackPageView);
  },
  _trackPageView: function(){
    var url = Backbone.history.getFragment();
    _gaq.push(['_trackPageview', "/#{url}"]);
  },

  routes: {
    '':         'index',
    'work':     'work',
    'profile':  'profile'
  },

  index: function(){
    window.location.hash = '/work';
  },
  work: function(){
    var view = new indexView({id: 'work'});
    Backbone.trigger('manager:goto', view, 'work');
  },
  profile: function(){
    var view = new profileView({id: 'profile'});
    Backbone.trigger('manager:goto', view, 'profile');
  }

});