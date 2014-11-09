var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#home').html()));
	},
});

var headerView = Backbone.View.extend({
	el: '.header',

	events: {
   		'click #back' : 'goBack',
  	},

	render: function() {
		this.$el.html(_.template($('#header').html()));
	},
	
	goBack: function() {
		window.history.back();
	},
});

var profileView = Backbone.View.extend({
	el: '.page',

	events: {
		'click a.btn-circle': 'addClass'
	},

	addClass: function (e) {
		$('a.btn-circle').removeClass('active'),
		$(e.currentTarget).addClass('active');
		console.log('clicked');
		console.log(e);
		e.preventDefault();
	},

	render: function() {
		this.$el.html(_.template($('#profile').html()));
	},
});

var artListView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'ebebeb')
		this.$el.html(_.template($('#art-list').html()));
	},
});
