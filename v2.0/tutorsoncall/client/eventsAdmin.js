function adminUser(userId){
	var user = Meteor.users.findOne({_id:userId});
	if(!user){
		return;
	}
	var role = user.role;
	if(!role){
		return false;
	}
	return true;
}

Template.tutorsAdmin.events({

	"click .js-del-tutor":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var tutorId = event.target.id.substring(4);
		var tutor = TutorProfiles.findOne({_id:tutorId});
		if(!tutor){
			return;
		}
		var userId = tutor.userId;
		if(confirm("Are you sure you want to delete this tutor profile?")){
			Meteor.call("deleteTPAdmin", tutorId);
			var message = {
				from:"admin",
				title:"Your tutor profile has been removed by admin",
				message:"Your tutor profile has been removed by admin!",
				to:userId,
				status:"new"
			}
			Meteor.call("createMessage", message);
		}
	},
	"click .js-del-all-tutors":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		if(confirm("Are you sure you want to delete all tutor profiles?")){
			Meteor.call("deleteTPs");
		}
	},
	"click .js-edit-tutor":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var tutorId = event.target.id.substring(5);
		var tutor = TutorProfiles.findOne({_id:tutorId});
		if(!tutor){
			return;
		}
		Session.set("tutorId", tutorId);
	}

});

Template.editTutorModal.events({

	"submit .js-editTutor":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var tutorId = event.target.tutorId.value;
		var name = event.target.name.value;
		var area = event.target.area.value;
		var hrRate = event.target.hrRate.value;
		var upvote = event.target.upvote.value;
		var userId = event.target.userId.value;
		var subjects = $("#subjectsI").val();
		var tutor = {
			name:name,
			area:area,
			hrRate:Number(hrRate),
			upvote:upvote,
			userId:userId,
			subjects:subjects
		}
		Meteor.call("updateTutorProfile", tutorId, tutor);
		var message = {
			from:"admin",
			title:"Your tutor profile has been updated by admin",
			message:"Your tutor profile has been updated by admin!",
			to:userId,
			status:"new"
		}
		Meteor.call("createMessage", message);
	}

});

Template.messagesAdmin.events({

	"click .js-del-message":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var messageId = event.target.id;
		if(confirm("Are you sure you want to delete this message?")){
			Meteor.call("deleteMessage", messageId);
		}
	},
	"click .js-del-all-messages":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		if(confirm("Are you sure you want to delete all messages?")){
			Meteor.call("deleteMessages");
		}
	}

});

Template.reviewsAdmin.events({

	"click .js-del-review":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var reviewId = event.target.id;
		// var review = Reviews.findOne({_id:reviewId});
		// console.log(review);
		if(confirm("Are you sure you want to delete this review?")){
			Meteor.call("deleteReview", reviewId);
		}
	},
	"click .js-del-all-reviews":function(event){
		if(!Meteor.user()){
			return;
		}
		if(confirm("Are you sure you want to delete all reviews?")){
			Meteor.call("deleteReviews");
		}
	}

});

Template.createProfileModalAdmin.events({

	"submit .js-create-profile-admin":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		event.preventDefault();
		var name = event.target.name.value;
		var userId = event.target.userId.value;
		var area = event.target.area.value;
		var hrRate = event.target.hrRate.value;
		var subjects = $("#subjects").val();
		var exprience = event.target.exprience.value;
		var profile = {
			userId:userId,
			name:name,
			area:area,
			hrRate:Number(hrRate),
			subjects:subjects,
			exprience:exprience,
			upvote:Number(0)
		}
		Meteor.call("createNewProfileAdmin", profile);
	}

});

Template.contactMessagesTemplate.events({

	"click .js-del-contact-message":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var messageId = event.target.id;
		if(confirm("Are you sure you want to delete this message?")){
			Meteor.call("deleteContactMessage", messageId);
		}
	},
	"click .js-del-all-contact-messages":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		if(confirm("Are you sure you want to delete all contact messages?")){
			Meteor.call("deleteContactMessages");
		}
	}

});

Template.contactMessageAdmin.events({

	"click .js-del-contact-messageI":function(event){
		if(!Meteor.user()){
			return;
		}
		var id = Meteor.user()._id;
		if(!adminUser(id)){
			return;
		}
		var messageId = event.target.id;
		if(confirm("Are you sure you want to delete this message?")){
			Meteor.call("deleteContactMessage", messageId);
			document.location.href = "/admin/contactmessages";
		}
	}

});













