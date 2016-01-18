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
	},
	deleteUsr:function(userId){
		if(!this.userId){
			return;
		}
		if(this.userId != userId){
			return;
		}
		var res = TutorProfiles.remove({userId:userId});
		return res;
	},
	createMessage:function(message){
		if(!this.userId){
			return;
		}
		if(message.to == this.userId && message.from == this.userId){
			return;
		}
		Messages.insert(message);
	},
	updateMessageStatus:function(message){
		if(!this.userId){
			return;
		}
		var messageId = message._id;
		var messageI = Messages.findOne({_id:messageId});
		if(!messageI){
			return;
		}
		Messages.update({_id:messageId}, {$set: {status: "read"}});
	},
	deleteMessage:function(messageId){
		if(!this.userId){
			return;
		}
		Messages.remove({_id:messageId});
	}

});