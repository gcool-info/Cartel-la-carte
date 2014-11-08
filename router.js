var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'profile': 'profilePage'
	},

	initialize: function() {
	  this.bind('route', this._pageView);
	},

	home:function() {
		home.render();
	},

	profilePage: function() {
		header.render();

		var profile = new profileView();
		profile.render();
	}
});