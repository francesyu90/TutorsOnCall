Meteor.publish("users", function(){
	return Meteor.users.find({});
});

Meteor.publish("tutorprofiles", function(){
	return TutorProfiles.find({});
});

Meteor.publish("messages", function(){
	return Messages.find({
		$or: [
			{from:this.userId},
			{to:this.userId}
		]
	});
});