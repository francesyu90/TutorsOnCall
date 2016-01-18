Reviews = new Meteor.Collection("reviews");

Chats = new Mongo.Collection("chats");

TutorProfiles = new Meteor.Collection("tutorprofiles");

TutorProfilesIndex = new EasySearch.Index({
    collection: TutorProfiles,
    fields: ['name', 'area', 'subjects'],
    engine: new EasySearch.Minimongo()
  });