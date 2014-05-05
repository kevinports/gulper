module.exports = Backbone.View.extend({
  template: require('../hbs/profile'),
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template({
      title: 'Profile',
      description: 'This is the profile page',
    }));
  }
});