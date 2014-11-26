//Apply the jqBootstrapValidation plugin to the elements you want validation applied to
$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

Template.article_new.events({
	"click .section_help": function (event, template) {
		alert("Use sections for individual steps of your article.");
	},
	"click .actions .delete": function (event, template) {
		event.preventDefault();
		console.log("delete", event, template);
	},
	"click .actions .draft": function (event, template) {
		event.preventDefault();
		console.log("draft", event, template);
	},
	"click .actions .publish": function (event, template) {
		event.preventDefault();
		console.log("publish");
		var data = {
			title:$('input[name="title"]').val(),
			author:Meteor.userId(),
			summary:$('input[name="summary"]').val(),
			date:{
				created:"",
				published:Date(),
				edited:""
			},
			sections: [
				{
					name:"",
					summary:"",
					content:"",
					next_section:[
						//pointer to a section
					]
				}
			]
		};

		// $('.sections .section')

		console.log($('input[name="sec1_title"]').val());
		console.log($('textarea[name="sec1_content"]').val());

	},
	"click #add_section": function (event, template) {
		console.log("Adding section.. @todo");
	}
})