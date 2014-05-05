module.exports = Backbone.View.extend({
  template: require('../hbs/work'),
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Work',
      description: 'Putting some work here for sure',
    }));
  }
});