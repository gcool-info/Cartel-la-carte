var homeScreen = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#home').html()));
		$('body').css('background-color', 'white');
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
		$('.header').html('');
		$('.footer').html('');
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

var artListView = Backbone.View.extend({
	el: '.page',

	render: function() {
		$('body').css('background-color', 'ebebeb');

		var currentMood = appModel.get('headerTitle');


		if (currentMood == 'téméraire' ) {
			this.$el.html(_.template($('#art-list-temeraire').html()));
		} else {

		}
		
	},
});


var explanationView = Backbone.View.extend({
	el: '.page',

	events: {
		'click #temeraire': 'goTemeraire',
		'click #coquin': 'goCoquin'
	},

	goTemeraire: function() {
		appModel.set('headerTitle', 'téméraire');
		router.navigate('art-list', {trigger: true});
	},

	goCoquin: function() {
		appModel.set('headerTitle', 'coquin');
		router.navigate('art-list', {trigger: true});
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
		this.$el.html(_.template($('#artworkTemeraire').html()));
	},
});

var artworkCoquin = Backbone.View.extend({
	el: '.page',

	render: function() {
		this.$el.html(_.template($('#artworkCoquin').html()));
	},
});
