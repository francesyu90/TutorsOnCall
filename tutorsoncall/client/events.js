Template.createProfileForm.events({

	"change .js-choose-status":function(event){
		var status = event.currentTarget.value;
		if(status == "student" || status == "parent"){
			Session.set("status", false);
			document.getElementById("status").style.visibility = "hidden";
			return;
		}else{
			// document.getElementById("proAlert").style.visibility = "hidden";
		}
		Session.set("status", true);
		
	}

});