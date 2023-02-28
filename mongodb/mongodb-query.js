// mongodb compass
// show database

db.users.insertOne()     //to insert one
db.users.insertMany()     //insert array of data
db.users.find()          //show data in collection
db.users.count()         //count data in collection
db.users.find().limit(2)  //limit data for showing
db.users.find().skip(2).limit(2);  //skip data and limit data for pagination
db.users.find().sort({ age: -1 });  //sorting by age
db.users.find().sort({ age: 1 });  //sorting by age
db.users.find().sort({ age: 1, name: 1 });  //sorting by age, name

// Projection [specific property]
db.users.find().projection({ name: 1 }); //show name property: use 1
db.users.find().projection({ name: 1, _db: 1 }); //remove property property: use 0
db.users.find().projection({ age: 0 }) //need all property without age

//filter
db.users.find({ age: 15 })   //find by age
db.users.find({ age: "12", name: "rokibul" })  //find by multiple property
db.users.find({ skills: "Javascript" }); //find in skill array
db.users.find({ skills: ["javascript", "C++"] })   //find exact array
db.users.find({ "adress.city": "Dhaka" });  //find in object 
data={
  _id: ObjectId("63fd7f35616d48e824dc6c01"),
  name: 'Jabir',
  age: 15,
  adress: {
    city: 'Dhaka',
    district: 'Dhaka'
  }
}
db.users.find({ "friends.age": "24" }); //find into array of object
data={
  _id: ObjectId("63fd7f35616d48e824dc6c02"),
  name: 'Rofiq',
  friends: [
    {
      name: 'miraj',
      age: 20
    },
    {
      name: 'Sobuj',
      age: '24'
    }
  ]
}

// Operators
db.users.find({ age: { $gt: "40" } });
db.users.find({ age: { $gte: "40" } });
db.users.find({ age: { $lt: "40" } });
db.users.find({ age: { $lte: "40" } });
db.users.find({ age: { $eq: "40" } }); 
db.users.find({ age: { $ne: "40" } }); 
db.users.find({ name: { $in: ["Rofiq", "Jabir"] } });
db.users.find({ name: { $nin: ["Rofiq", "Jabir"] } });
db.users.find({ $and: [{ name: "Rokibul" }, { age: "29" }] });
db.users.find({ $or: [{ name: "Rokibul" }, { age: "39" }] });
db.users.find({ age: { $exists: true } });
db.users.find({ age: { $exists: false } });
db.users.find({ adress: { $type: "object" } });