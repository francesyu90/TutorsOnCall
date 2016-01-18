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
		var numOfTutors = TutorProfiles.find({}).count;
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
		if (!Session.get("hrRate")){
			return TutorProfiles.find({});
		}else{
			var hrRate = Number(Session.get("hrRate"));
			return TutorProfiles.find({hrRate: {$lte:hrRate}});
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
		var numOfMessages = Messages.find({}).count();
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
		return Messages.find({});
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
	}

});











