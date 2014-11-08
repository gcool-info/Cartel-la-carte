var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#home').html()));
	},
});

var headerView = Backbone.View.extend({
	el: '.header',

	render: function() {
		this.$el.html(_.template($('#header').html()));
	},
});

var profileView = Backbone.View.extend({
	el: '.page',


	render: function() {
		this.$el.html(_.template($('#profile').html()));
	},
});

var artListView = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#art-list').html()));
	},
});
