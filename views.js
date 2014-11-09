var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#home').html()));
	},
});

var headerView = Backbone.View.extend({
	el: '.header',

	initialize: function() {
		this.listenTo(appModel, 'change', this.render);
	},

	events: {
   		'click #back' : 'goBack',
  	},

	render: function() {
		$('.navbar-inverse').css('background-color', this.model.headerColor);
		console.log(this.model); 
		this.$el.html(_.template($('#header').html(), {model: this.model}));
	},
	
	goBack: function() {
		window.history.back();
	},
});

var footerView = Backbone.View.extend({
	el: '.footer',
	render: function() {
		this.$el.html(_.template($('#footer').html()));
	}
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
		$('body').css('background-color', 'ebebeb');
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


var explanationView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'ebebeb')
		this.$el.html(_.template($('#explanation').html()), {model: appModel});
	},
});

var artworkView = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#artwork').html()));
	},
});
