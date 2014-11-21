Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'index'})


Router.onAfterAction(function() {
	page = this.route.name;
	if (page) {
		document.title = page+' | '+config.template_global.name;
	} else {
		document.title = config.template_global.name;
	}
});

var requireLogin = function() {
	if (! Meteor.user()) {
		this.render('accessDenied');
	} else {
		this.next();
	}
}


Router.route('/articles', {name: 'articles'})

Router.route('/article/:_id', function article () {
	this.render('article', {data: {id: this.params._id}})
})

// Router.route('/article/new', {
// 	name: 'article_new',
// 	onBeforeAction: function() {
// 		console.log("Fred"); //never printed
// 	}
// })

Router.route('/article/new', {
	name: 'article_new'
})

var requireLogin = function() {
	console.log("Fred"); //never printed
}
Router.before(requireLogin);