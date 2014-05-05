_ = require('underscore');
Backbone = require('backbone');
Backbone.$ = require('jquery');
Backbone.StateManager = require('./vendor/backbone.statemanager');

var manager = require('./manager');

window.app = {
  init: function(){
    this.instance = new manager();
    Backbone.history.start();
  }
}

Backbone.$(function(){
  window.app.init();

});