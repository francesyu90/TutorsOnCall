Meteor.methods({

	updateUsr:function(user){
		if(!this.userId){
			return;
		}
		var userId = user._id;
		Meteor.users.update({_id:userId}, {$set: {profile:user.profile}});
	},
	createNewProfile:function(profile){
		if(!this.userId){
			return;
		}
		TutorProfiles.insert(profile);
	}

});