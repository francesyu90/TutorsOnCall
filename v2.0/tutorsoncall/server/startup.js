if (!Meteor.users.findOne()){
	var emailI = "francesyu90@yahoo.com";
	var emailII = "yubeijia@live.cn";
	var usernameI = "francesyu90";
	var usernameII = "yubeijia";
	Meteor.users.insert({
		username:usernameI, 
		role:"admin",
		profile: {
			firstname:"Frances",
			lastname:"Yu"
		},
		emails:[{address:emailI}],
		services:{ password:{"bcrypt" : "$2a$10$V1egqRDkP4d/GqJ51zzBdejsdgk6PtfmvyRlEo7j57D7LjNXRFaNu"}}
	});
	Meteor.users.insert({
		username:usernameII,
		role:"admin",
		profile: {
			firstname:"Beijia",
			lastname:"Yu"
		},
		emails:[{address:emailII}],
		services:{ password:{"bcrypt" : "$2a$10$tQyGB2vi1j2QLj6f7cV4NeRvDV4iAOBU7r0xxRJ5epexoVYV5xy7C"}}
	});
	console.log("Done creating admin users ...");
} 