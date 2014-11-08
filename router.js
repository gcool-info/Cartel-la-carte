var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'profile': 'profilePage'
	},

	initialize: function() {
	  this.bind('route', this._pageView);
	},

	home:function() {
		header.render();
		home.render();
	},

	profilePage: function() {
		header.render();
		var paths = new pathView();
		paths.render();
	}
});