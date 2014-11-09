var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'profile': 'profilePage',
		'art-list': 'artListPage',
		'explanation': 'explanationPage',
		'artwork': 'artworkPage',
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
		header.render();

		var explanation = new explanationView();
		explanation.render();
	},
	artworkPage: function() {

		var artwork = new artworkView();
		artwork.render();
	}

});