var subjects = [
	{name:"Chemistry"},
	{name:"Physics"},
	{name:"Mathematics"},
	{name:"Computer Science"},
	{name:"Statistics"},
	{name:"Biology"},
	{name:"English"},
	{name:"History"},
	{name:"Geography"}
];

Meteor.subscribe("users");
Meteor.subscribe("tutorprofiles");

Template.profile.helpers({

	checkProfileExist:function(){
		if(!Meteor.user()){
			return;
		}
		var userId = Meteor.user()._id;
		var user = TutorProfiles.findOne({userId:userId});
		if(!user){
			return false;
		}
		return true;
	}

});

Template.createProfileForm.helpers({

	checkStatus:function(){
		if(!Meteor.user() || !Session.get("status")){
			return;
		}
		return Session.get("status");
	},
	subjects:function(){
		if(!Meteor.user() || !Session.get("status")){
			return;
		}
		return subjects;
	}

});

Template.createProfileModal.helpers({

	checkStatus:function(){
		if(!Meteor.user() || !Session.get("status")){
			return;
		}
		return Session.get("status");
	}	

});

Template.profileTemplate.helpers({

	profile:function(){
		if(!Meteor.user()){
			return;
		}
		var userId = Meteor.user()._id;
		var profile = TutorProfiles.findOne({userId:userId});
		if(!profile){
			return;
		}
		console.log(profile);
		return profile;
	}

});












