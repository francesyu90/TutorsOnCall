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
	},
	upvoteTutor:function(tutorId){
		if(!this.userId){
			return;
		}
		var profile = TutorProfiles.findOne({userId:tutorId});
		if(!profile){
			return;
		}
		var upvote = profile.upvote + 1;
		TutorProfiles.update({userId:tutorId},{$set: {upvote:upvote}});
	},
	addReview:function(review){
		if(!this.userId){
			return;
		}
		Reviews.insert(review);
	},
	deleteReview:function(reviewId){
		if(!this.userId){
			return;
		}
		Reviews.remove({_id:reviewId});
	}


});

















