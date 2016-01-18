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
Meteor.subscribe("messages");

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
		return profile;
	}

});

Template.navbar.helpers({

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
	},
	numOfNewMessage:function(){
		if(!Meteor.user()){
			return;
		}
		var userId = Meteor.user()._id;
		var messageCount = Messages.find({to:userId, status:"new"}).count();
		return messageCount;

	}

});

Template.tutors.helpers({

	isEmpty:function(){
		var numOfTutors = TutorProfiles.find({}).count();
		if(numOfTutors > 0){
			return false;
		}
		return true;
	}

});

Template.searchBox.helpers({

	tutorprofilesIndex: () => TutorProfilesIndex

});

Template.filter.helpers({

	tutors:function(){
		if (!Session.get("hrRate") && (!Session.get("upvote"))){
			return TutorProfiles.find({});
		}else{
			var hrRate = Number(Session.get("hrRate"));
			var upvote = Number(Session.get("upvote"));
			return TutorProfiles.find({
				$or: [
					{hrRate: {$lte:hrRate}},
					{upvote: {$gte:upvote}}
				]
			});
		}
	}

});

Template.create.helpers({

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

Template.messages.helpers({

	isEmpty:function(){
		if(!Meteor.user()){
			return;
		}
		var numOfMessages = Messages.find({to:Meteor.user()._id}).count();
		if(numOfMessages > 0){
			return false;
		}
		return true;
	}

});

Template.messageList.helpers({

	messages:function(){
		if(!Meteor.user()){
			return;
		}
		return Messages.find({to:Meteor.user()._id});
	},
	checkStatus:function(messageId){
		if(!Meteor.user()){
			return;
		}
		var message = Messages.findOne({_id:messageId});
		if(!message){
			return;
		}
		if(message.status == "read"){
			return false;
		}
		return true;
	},
	getName:function(userId){
		if(!Meteor.user()){
			return;
		}
		if(userId == "admin"){
			return "admin";
		}
		var user = Meteor.users.findOne({_id:userId});
		if(!user){
			return;
		}
		var usr = fixObjectKeys(user.profile);
		return usr.firstname + " " + usr.lastname;
	}

});

Template.sendMessagefromTutor.helpers({

	getName:function(userId){
		if(!Meteor.user()){
			return;
		}
		if(userId == "admin"){
			return "admin";
		}
		var user = Meteor.users.findOne({_id:userId});
		if(!user){
			return;
		}
		var usr = fixObjectKeys(user.profile);
		return usr.firstname + " " + usr.lastname;
	},
	substringContainsRe:function(title){
		if(!title){
			return;
		}
		var titleI = title.substring(0,2);
		if(titleI != "Re"){
			return false;
		}
		return true;
	}

});

Template.messageTemplate.helpers({

	getName:function(userId){
		if(!Meteor.user()){
			return;
		}
		if(userId == "admin"){
			return "admin";
		}
		var user = Meteor.users.findOne({_id:userId});
		if(!user){
			return;
		}
		var usr = fixObjectKeys(user.profile);
		return usr.firstname + " " + usr.lastname;
	},
	isSenderAdmin:function(from){
		if(from != "admin"){
			return false;
		}
		return true;
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










