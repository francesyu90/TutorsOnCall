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
	deleteMessages:function(){
		if(!this.userId){
			return;
		}
		Messages.remove({});
	},
	upvoteTutor:function(tutorId){
		if(!this.userId){
			return;
		}
		var profile = TutorProfiles.findOne({userId:tutorId});
		if(!profile){
			return;
		}
		var upvote = Number(profile.upvote) + 1;
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
	},
	sendContactForm:function(form){
		ContactMessages.insert(form);
	},


	// For Admin
	deleteTPAdmin:function(tutorId){
		if(!this.userId){
			return;
		}
		TutorProfiles.remove({_id:tutorId});
	},
	deleteTPs:function(){
		if(!this.userId){
			return;
		}
		TutorProfiles.remove({});
	},
	updateTutorProfile:function(tutorId, tutor){
		if(!this.userId){
			return;
		}
		if(!TutorProfiles.findOne({_id:tutorId})){
			return;
		}
		var name = tutor.name;
		var area = tutor.area;
		var hrRate = tutor.hrRate;
		var upvote = tutor.upvote;
		var userId = tutor.userId;
		var subjects = tutor.subjects;
		if(!subjects){
			TutorProfiles.update(
				{_id:tutorId}, 
				{$set: {
					name:name, 
					area:area,
					hrRate:hrRate,
					upvote:upvote,
					userId:userId
				}
			})
			return;
		}
		TutorProfiles.update(
			{_id:tutorId}, 
			{$set: {
				name:name, 
				area:area,
				hrRate:hrRate,
				upvote:upvote,
				userId:userId,
				subjects:subjects
			}
		})
	},
	deleteReview:function(reviewId){
		if(!this.userId){
			return;
		}
		Reviews.remove({_id:reviewId});
	},
	deleteReviews:function(){
		if(!this.userId){
			return;
		}
		Reviews.remove({});
	},
	createNewProfileAdmin:function(profile){
		if(!this.userId){
			return;
		}
		TutorProfiles.insert(profile);
	},
	deleteContactMessage:function(messageId){
		if(!this.userId){
			return;
		}
		ContactMessages.remove({_id:messageId});
	},
	deleteContactMessages:function(){
		if(!this.userId){
			return;
		}
		ContactMessages.remove({});
	},

});

















