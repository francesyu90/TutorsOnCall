Router.route("/",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("home",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/create",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("create",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/profile",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("profile",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/tutors",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("tutors",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/contact",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("contact",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/tutors/filter",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("tutorsI",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/tutor/:id",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("tutor",{
		to:"main",
		data: function() {
			var tutor = TutorProfiles.findOne({userId:this.params.id});
			return tutor;
		}
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/messages",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("messages",{
		to:"main"
	});
	this.render("footer",{
		to:"footer"
	});
});

Router.route("/message/:id",function (){
	this.render("navbar",{
		to:"navbar"
	});
	this.render("message",{
		to:"main",
		data:function(){
			var message = Messages.findOne({_id:this.params.id});
			return message;
		}
	});
	this.render("footer",{
		to:"footer"
	});
});

function adminUser(userId){
	var user = Meteor.users.findOne({_id:userId});
	if(!user){
		return;
	}
	var role = user.role;
	if(!role){
		return false;
	}
	return true;
}

Router.route("/admin",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("homeAdmin",{
		to:"main"
	});
});

Router.route("/admin/tutors",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("tutorsAdmin",{
		to:"main"
	});
});

Router.route("/admin/messages",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	Session.set("linkLimit", 2);
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("messagesAdmin",{
		to:"main"
	});
});

Router.route("/admin/reviews",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	Session.set("linkLimit", 2);
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("reviewsAdmin",{
		to:"main"
	});
});

Router.route("/admin/contactmessages",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("contactmessagesAdmin",{
		to:"main"
	});
});

Router.route("/admin/contactmessage/:id",function (){
	this.render("footer",{
		to:"footer"
	});
	if(!Meteor.user()){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	var userId = Meteor.user()._id;
	if(!adminUser(userId)){
		this.render("warningAlertAdminI",{
			to:"main"
		});
		return;
	}
	this.render("navbarAdmin",{
		to:"navbar"
	});
	this.render("contactMessageAdmin",{
		to:"main",
		data: function() {
			var message = ContactMessages.findOne({_id:this.params.id});
			return message;
		}
	});
});












