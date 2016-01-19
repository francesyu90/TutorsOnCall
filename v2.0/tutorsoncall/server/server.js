Meteor.publish("users", function(){
	return Meteor.users.find({});
});

Meteor.publish("tutorprofiles", function(){
	return TutorProfiles.find({});
});

Meteor.publish("messages", function(){
	if(!this.userId){
		return;
	}
	var user = Meteor.users.findOne({_id:this.userId});
	if(!user){
		return;
	}
	if(user.role != "admin"){
		return Messages.find({
			$or: [
				{from:this.userId},
				{to:this.userId}
			]
		});
	}
	return Messages.find({});
});

Meteor.publish("reviews", function(){
	return Reviews.find({});
});