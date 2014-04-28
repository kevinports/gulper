var View = require('./views/view');

$(function(){
  var view = new View({el: 'body'});
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 100);
});