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
			exprience:exprience
		}
		Meteor.call("createNewProfile", profile);
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
			if(res == 1){
				alert("Your tutor profile has deleted successfully!");
			}
		}
	}

});

Template.filter.events({

	"submit .js-filter-hrRate":function(event){
		event.preventDefault();
		var hrRate = event.target.hrRate.value;
		Session.set("hrRate", hrRate);
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
		var message = event.target.messageI.value;
		event.target.messageI.value = "";
		if(tutorId == id){
			alert("Warning: You cannot send message to yourself!");
			return;
		}
		var message = {
			from:id,
			message:message,
			to:tutorId,
			status:"new"
		}
		Meteor.call("createMessage", message);
	}

});






















