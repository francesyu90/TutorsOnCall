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