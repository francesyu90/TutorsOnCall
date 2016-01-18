Reviews = new Meteor.Collection("reviews");

Messages = new Mongo.Collection("messages");	

TutorProfiles = new Meteor.Collection("tutorprofiles");

TutorProfilesIndex = new EasySearch.Index({
    collection: TutorProfiles,
    fields: ['name', 'area', 'subjects'],
    engine: new EasySearch.Minimongo()
  });