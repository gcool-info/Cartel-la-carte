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
		this.$el.html(_.template($('#header').html()));
		$('#headerTitle').text(appModel.get('headerTitle'));
		$('.navbar-inverse').css('background-color', appModel.get('headerColor'));
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
		'click a.btn-circle': 'addClass',
		'click a.sprite': 'addClassHumeur'
	},

	addClass: function (e) {
		$('a.btn-circle').removeClass('active'),
		$(e.currentTarget).addClass('active');
		e.preventDefault();
	},
	addClassHumeur: function(e) {
		$('a.sprite').removeClass('active'),
			$(e.currentTarget).addClass('active');
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
