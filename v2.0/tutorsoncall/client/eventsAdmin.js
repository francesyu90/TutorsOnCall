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
	}

});