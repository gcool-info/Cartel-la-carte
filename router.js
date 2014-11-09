var Router = Backbone.Router.extend({

	routes: {
		'' : 'home',
		'profile': 'profilePage',
		'art-list-temeraire': 'artListTemerairePage',
		'art-list-coquin': 'artListCoquinPage',
		'explanation': 'explanationPage',
		'artworkTemeraire': 'artworkTemerairePage',
		'artworkCoquin': 'artworkCoquinPage',

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
		footer.render();
		var profile = new profileView();
		profile.render();
		
		appModel.set('startTimer', false);
		appModel.set('nextRoute', 'explanation');
	},

	artListTemerairePage: function() {
		var artListTemeraire = new artListTemeraireView();
		artListTemeraire.render();

		var startedTimer = appModel.get('startTimer');

		if (!startedTimer) {
			var timer = new timerView();
			timer.render();
			timer.startTimer();
			appModel.set('startTimer', true);
		}
			

		appModel.set('headerTitle', 'téméraire');
		appModel.set('headerColor', 'ec462f');
	},

	artListCoquinPage: function() {
		var artListCoquin = new artListCoquinView();
		artListCoquin.render();

		var startedTimer = appModel.get('startTimer');

		if (!startedTimer) {
			var timer = new timerView();
			timer.render();
			timer.startTimer();
			appModel.set('startTimer', true);
		}

		appModel.set('headerTitle', 'coquin');
		appModel.set('headerColor', '9a4d9e');
	},

	explanationPage: function() {
		appModel.set('headerTitle', 'prototype');
		appModel.set('headerColor', '3e3e3e');
		appModel.set('startTimer', false);

		var explanation = new explanationView();
		explanation.render();
	},
	artworkTemerairePage: function() {
		var artworkTemeraire = new artworkTemeraireView();
		artworkTemeraire.render();

		appModel.set('headerTitle', 'téméraire');
		appModel.set('headerColor', 'ec462f');
	},

	artworkCoquinPage: function() {
		var artworkCoquin = new artworkCoquinView();
		artworkCoquin.render();

		appModel.set('headerTitle', 'coquin');
		appModel.set('headerColor', '9a4d9e');
	}

});