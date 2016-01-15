Meteor.publish("users", function(){
	return Meteor.users.find({});
});

Meteor.publish("tutorprofiles", function(){
	return TutorProfiles.find({});
});