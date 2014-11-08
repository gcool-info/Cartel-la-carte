var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'profile': 'profilePage',
		'art-list': 'artListPage'
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
	}

});