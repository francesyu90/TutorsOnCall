var subjectsI = [
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

Template.tutorsAdmin.helpers({

	tutorprofilesIndex: () => TutorProfilesIndex

});

Template.editTutorForm.helpers({

	tutor:function(){
		if(!Session.get("tutorId")){
			return;
		}
		var tutorId = Session.get("tutorId");
		var tutor = TutorProfiles.findOne({_id:tutorId});
		if(!tutor){
			return;
		}
		return tutor;
	},
	subjectsI:function(){
		return subjectsI;
	}

});