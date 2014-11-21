Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'index'})

//set the page title -- @fixme
Router.onAfterAction(function() {
	page = this.route.name;
	if (page) {
		document.title = page+' | '+config.template_global.name;
	} else {
		document.title = config.template_global.name;
	}
});

requireLogin = function(text) {
	if (! Meteor.user()) {
		this.render('accessDenied', {data:{msg:text||""}});
	} else {
		this.next();
	}
}