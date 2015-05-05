Template.editPost.rendered = function(){

};

Template.editPost.helpers({
	sections: function(){
		return Session.get('sections');
	}
});

Template.editPost.events({
	'click a.ion-android-send': function(e, t){
		var postId, title, body;
		title = (_ref = t.find('input[name=title]')) != null ? _ref.value : void 0;
		body = (_ref = t.find('input[name=body]')) != null ? _ref.value : void 0;
		console.log(title + body);

		updateObj = {
			title: title,
			body: body,
			published: true
		};

		postId = Posts.update({
			_id: this._id
		},{
			$set: updateObj
		});
		return Router.go("/postView/" + this._id)
	}
});

