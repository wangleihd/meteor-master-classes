Template.addPost.events({
	'click a.ion-android-send': function(e, t){
		var clearedSections, newPost, postId, sections, title, _ref;
		console.log('Submitting...');
		sections = Session.get('sections');
		console.log(sections);
		title = (_ref = t.find('input[name=title]')) != null ? _ref.value: void 0;
		body = (_ref = t.find('input[name=body]')) != null ? _ref.value: void 0;

		newPost = {
			title: title,
			body: body,
			published: true
		};
		console.log(newPost);
		postId = Posts.insert(newPost);
		return Router.go("/postView/" + postId);
	}
});



