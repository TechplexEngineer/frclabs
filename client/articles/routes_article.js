Router.route('/articles', {name: 'articles'})

Router.route('/article/new', {
	name: 'New Article',
	template: 'article_new',
	onBeforeAction: function () {
		requireLogin.call(this,'You must be logged in to create a new article.')
	}
})
//order matters here!
Router.route('/article/:_id', function article () {
	this.render('article', {data: {id: this.params._id}})
})
