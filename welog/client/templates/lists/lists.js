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
});
