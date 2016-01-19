Messages = new Mongo.Collection("messages");

TutorProfiles = new Mongo.Collection("tutorprofiles");

TutorProfilesIndex = new EasySearch.Index({
    collection: TutorProfiles,
    fields: ['name', 'area', 'subjects'],
    engine: new EasySearch.Minimongo()
});

Reviews = new Mongo.Collection("reviews");
