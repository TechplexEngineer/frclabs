Router.route('/articles', {name: 'articles'})

Router.route('/article/:_id', function article () {
	this.render('article', {data: {id: this.params._id}})
})

Router.route('/article/new', {name: 'article_new'})