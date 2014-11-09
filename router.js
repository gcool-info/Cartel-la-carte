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
		footer.render();
	},

	profilePage: function() {
		header.render();

		var profile = new profileView();
		profile.render();
		footer.render();
	},

	artListPage: function() {
		appModel.set('headerTitle', 'téméraire');
		appModel.set('headerColor', 'ec462f');

		var artList = new artListView();
		artList.render();
	},

	explanationPage: function() {
		appModel.set('headerTitle', 'prototype');
		appModel.set('headerColor', '3e3e3e');

		var explanation = new explanationView();
		explanation.render();
	},
	artworkPage: function() {

		var artwork = new artworkView();
		artwork.render();
	}

});