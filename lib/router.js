Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'index'})

Router.onAfterAction(function() {
	page = this.route.name;
	if (page) {
		document.title = page+' | FRC Labs';
	} else {
		document.title = 'FRC Labs';
	}
});