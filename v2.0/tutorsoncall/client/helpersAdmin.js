lastScrollTopI = 0;
$(window).scroll(function(event){
	//	test if near the buttom of the window
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		//	where are in the page
		var scrollTop = $(this).scrollTop();
		//	test if going down
		if(scrollTop > lastScrollTopI) {
			Session.set("linkLimit", Session.get("linkLimit")+2);
		}
		lastScrollTopI = scrollTop;
	}
});

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

Template.messagesAdmin.helpers({

	messages:function(){
		return Messages.find({},{limit:Session.get("linkLimit")});
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

function fixObjectKeys(obj){
	var newObj = {};
	for (key in obj){
    	var key2 = key.replace("-", "");
    	newObj[key2] = obj[key];
  	}
  	return newObj;
}

Template.reviewsAdmin.helpers({

	reviews:function(){
		return Reviews.find({},{limit:Session.get("linkLimit")});
	},
	getName:function(userId){
		if(!Meteor.user()){
			return;
		}
		var user = Meteor.users.findOne({_id:userId});
		if(!user){
			return;
		}
		var usr = fixObjectKeys(user.profile);
		return usr.firstname + " " + usr.lastname;
	}

});


