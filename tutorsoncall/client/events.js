Template.createProfileForm.events({

	"change .js-choose-status":function(event){
		if(!Meteor.user()){
			return;
		}
		var status = event.currentTarget.value;
		var userId = Meteor.user()._id;
		var user = Meteor.users.findOne({_id:userId});
		if(!user){
			return;
		}
		user.profile.status = status;
		Meteor.call("updateUsr", user);
		if(status == "student" || status == "parent"){
			Session.set("status", false);
			document.getElementById("status").style.visibility = "hidden";
			return;
		}
		Session.set("status", true);
	}

});

Template.createProfileModal.events({

	"submit .js-create-profile":function(event){

		if(!Meteor.user()){
			return;
		}
		var userId = Meteor.user()._id;
		var usr = fixObjectKeys(Meteor.user().profile);
		var firstName = usr.firstname;
		var lastName = usr.lastname;
		var name = firstName + " " + lastName;
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
			upvote:0
		}
		Meteor.call("createNewProfile", profile);
		var message = {
			from:"admin",
			title:"Thank you for creating your tutor profile on TutorsOnCall.",
			message:"Thank you for creating your tutor profile on TutorsOnCall.",
			to:userId,
			status:"new"
		}
		Meteor.call("createMessage", message);
	}

});

function fixObjectKeys(obj){
	var newObj = {};
	for (key in obj){
    	var key2 = key.replace("-", "");
    	newObj[key2] = obj[key];
  	}
  	return newObj;
}

Template.profile.events({

	"click .js-delete-profile":function(event){
		if(!Meteor.user()){
			return;
		}
		if(confirm("Are you sure that you want to delete your account?")){
			var userId = Meteor.user()._id;
			var profile = TutorProfiles.findOne({userId:userId});
			if(!profile){
				return;
			}
			var res = Meteor.call("deleteUsr", userId);
			var message = {
				from:"admin",
				title:"Your tutor profile has been successfully removed!",
				message:"Your tutor profile has been successfully removed!",
				to:userId,
				status:"new"
			}
			Meteor.call("createMessage", message);
		}
	}

});

Template.filter.events({

	"submit .js-filter-hrRate":function(event){
		event.preventDefault();
		var hrRate = event.target.hrRate.value;
		Session.set("hrRate", hrRate);
	},
	"submit .js-filter-upvote":function(event){
		event.preventDefault();
		var upvote = event.target.upvote.value;
		Session.set("upvote", upvote);
	}

});

Template.sendMessagetoTutor.events({

	"submit .js-send-message-to-tutor":function(event){
		// event.preventDefault();
		if(!Meteor.user()){
			return;
		}
		var tutorId = event.target.tutorId.value;
		var id = Meteor.user()._id;
		var title = event.target.title.value;
		var message = event.target.messageI.value;
		event.target.messageI.value = "";
		if(tutorId == id){
			alert("Warning: You cannot send message to yourself!");
			return;
		}
		var message = {
			from:id,
			title:title,
			message:message,
			to:tutorId,
			status:"new"
		}
		Meteor.call("createMessage", message);
	}

});

Template.messageList.events({

	"click .js-read-message":function(event){
		if(!Meteor.user()){
			return;
		}
		var messageId = event.currentTarget.id;
		if(!Meteor.user()){
			return;
		}
		var message = Messages.findOne({_id:messageId});
		if(!message){
			return;
		}
		Meteor.call("updateMessageStatus", message);
	},
	"change .js-delete-message":function(event){
		if(!Meteor.user()){
			return;
		}
		var setDeleted = event.currentTarget.checked;
		if(!setDeleted){
			return;
		}
		var messageId = event.currentTarget.id.substring(1);
		if(confirm("Are you sure you want to delete this message?")){
			Meteor.call("deleteMessage", messageId);
		}
	}

});

Template.sendMessagefromTutor.events({

	"submit .js-send-message-to-tutor":function(event){
		if(!Meteor.user()){
			return;
		}
		var clientId = event.target.client.value;
		var id = Meteor.user()._id;
		var title = event.target.title.value;
		var message = event.target.message.value;
		event.target.message.value = "";
		var message = {
			from:id,
			title:title,
			message:message,
			to:clientId,
			status:"new"
		}
		Meteor.call("createMessage", message);
	}

});

Template.tutorProfile.events({

	"click .js-upvote":function(event){
		var tutorId = event.target.id.substring(1);
		var tutor = TutorProfiles.findOne({userId:tutorId});
		if(!tutor){
			return;
		}
		Meteor.call("upvoteTutor", tutorId);
	}

});






















