var Router = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'profile': 'profilePage',
		'art-list': 'artListPage',
		'explanation': 'explanationPage',
		'artworkTemeraire': 'artworkTemerairePage',

	},

	initialize: function() {
	  this.bind('route', this._pageView);
	},

	home:function() {
		home.render();
		appModel.set('nextRoute', 'profile');
	},

	profilePage: function() {
		header.render();
		var profile = new profileView();
		profile.render();
		
		appModel.set('nextRoute', 'explanation');
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
	artworkTemerairePage: function() {
		var artworkTemeraire = new artworkTemeraireView();
		artworkTemeraire.render();
	}

});