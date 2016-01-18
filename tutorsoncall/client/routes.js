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

