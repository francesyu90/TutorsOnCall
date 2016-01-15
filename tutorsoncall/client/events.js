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
			hrRate:hrRate,
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