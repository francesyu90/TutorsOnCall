Template.tutorsAdmin.events({

	"click .js-del-tutor":function(event){
		if(!Meteor.user()){
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
	"click .js-edit-tutor":function(event){
		if(!Meteor.user()){
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













