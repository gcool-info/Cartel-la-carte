var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {

	},
});

var headerView = Backbone.View.extend({
	el: '.header',

	render: function() {
		this.$el.html(_.template($('#header').html()));
	},
});

var pathView = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html();
	},
});
