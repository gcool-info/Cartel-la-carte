var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#home').html()));
		$('body').css('background-color', 'white');
		$('.header').html('');
	},
});

var headerView = Backbone.View.extend({
	el: '.header',

	initialize: function() {
		this.listenTo(appModel, 'change:headerTitle', this.render);
		this.listenTo(appModel, 'change:headerColor', this.render);
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

	initialize: function() {
		this.listenTo(appModel, 'change:nextRoute', this.render);
	},

	render: function() {
		this.$el.html(_.template($('#footer').html()));

		$('#footer-link').attr('href', '#' + appModel.get('nextRoute'));
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

var artListTemeraireView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'ebebeb');		
		this.$el.html(_.template($('#art-list-temeraire').html()));
	},

	
});

var artListCoquinView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'ebebeb');
		this.$el.html(_.template($('#art-list-coquin').html()));
		
	},
});



var explanationView = Backbone.View.extend({
	el: '.page',

	events: {
		'click #temeraire': 'goTemeraire',
		'click #coquin': 'goCoquin'
	},

	goTemeraire: function() {
		router.navigate('art-list-temeraire', {trigger: true});
	},

	goCoquin: function() {
		router.navigate('art-list-coquin', {trigger: true});
	},

	render: function() {
		$('body').css('background-color', 'ebebeb')
		this.$el.html(_.template($('#explanation').html()), {model: appModel});
		$('.footer').html('');
	},
});

var artworkTemeraireView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'EBEBEB');
		this.$el.html(_.template($('#artworkTemeraire').html()));
	}
});

var artworkCoquinView = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#artworkCoquin').html()));

	},
});

var timerView = Backbone.View.extend({
	el: '.timer',

	render: function() {
		this.$el.html(_.template($('#progress-bar').html()));
	},

	startTimer: function() {
		$('.foreground').animate({
		    left: '0'
		  }, 300000, "linear");
	}
});
