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