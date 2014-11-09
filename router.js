var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'profile': 'profilePage',
		'art-list': 'artListPage',
		'explanation': 'explanationPage'
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
	},

	artListPage: function() {
		header.render();

		var artList = new artListView();
		artList.render();
	},

	explanationPage: function() {
		appModel.set('headerTitle', 'prototype');
		appModel.set('headerColor', '3e3e3e');

		var explanation = new explanationView();
		explanation.render();
	}

});