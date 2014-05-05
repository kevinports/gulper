var router = require('./router'),
    nav = require('./views/nav'),
    transitions = require('./transitions');

module.exports = Backbone.View.extend({
  el: ".root",

  initialize: function(){
    var _this = this;
    this.router = new router();
    this.nav = new nav();

    Backbone.StateManager.addStateManager(this);
    Backbone.on('manager:goto', function(view, state){
      _this.goto(view, state);
      _this.nav.update();
    });

  },

  goto: function(view, state){

    var _this = this,
        next = view,
        previous = this.currentPage || null,
        options = {
          next: next,
          previous: previous,
          callback: function(){
            if(previous){
              previous.remove();
            }
          }
        };
    next.render({'page':true});
    this.$el.append( next.$el );
    this.triggerState(state, options);
    _this.currentPage = next;
  },

  states: {
    work: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:profile': transitions.slideLeft
      }
    },
    profile: {
      enter: function(){},
      exit: function(){},
      transitions:{
        'onExitTo:work': transitions.slideRight
      }
    }
  }

});
