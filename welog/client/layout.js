Template.layout.events({
	'click #showProfileMenu': function(event, t){
		t.ActionSheetButton = [];
		if(Meteor.user() != null){
			t.ActionSheetButton.push({
				actionId: 'addPost',
				text: 'New Post <i class="icon ion-ios-compose"></i>'
			});
			t.ActionSheetButton.push({
				actionId: 'logout',
				text: 'Logout <i class="icon ion-log-out"></i>'
			});
		}else{
			t.ActionSheetButton.push({
				actionId: 'login',
				text: 'Login <i class="icon ion-log-in"></i>'
			});
		}
		return IonActionSheet.show({
			titleText:'',
			buttons: t.ActionSheetButton,
			cancelText: 'Cancel',
			cancel: function(){},
			buttonClicked: function (index) {
				var _ref;
				switch((_ref = t.ActionSheetButton[index]) != null ? _ref.actionId: void 0){
					case 'addPost':
						Router.go('addPost');
						break;
					case 'logout':
						Meteor.logout(function(){
							toastr.success('Logged out');
							return Route.go('lists');
						});
						break;
					case 'login':
						Route.go('userAccounts');
				}
				return true;
			},
			destructiveButtonClicked: function(){
				console.log('Destructive Action!');
				return true;
			}
		});
	}
});
