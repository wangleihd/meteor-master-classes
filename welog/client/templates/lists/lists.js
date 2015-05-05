Template.lists.helpers({
  times: function () {
    var times = [];
    _(20).times(function(n){
      times.push(n);
    });
    return times;
  },
  posts: function(){
  	return Posts.find();
  },
  email: function(){
  	return Meteor.user().email[0].address;
  },
  getuser: function(){
    console.log('getuser', this);
    return Meteor.users.findOne({_id: this.authorId});
  },
  getUerPictuereOrDefault: function(){
    return 'https://randomuser.me/api/portraits/thumb/men/1.jpg';
  },

  get_avatar_url: function(){
    console.log('user is', usr);
    return Avatar.getUrl(url);
  },
});

Template.lists.events({
  'click .veiwpost': function(){
    return Router.go("/postView/" + this._id);
  }
});
