// Step 1: Install and require mongoose package
const mongoose = require("mongoose");

// Step 2: Connect mongoose to our mongodb server with DB Name
mongoose
  .connect("mongodb://127.0.0.1:27017/fruitDB")
  .then(() => console.log("Mongodb Connected Successfully"))
  .catch((err) => console.log("Error: ", err));

// Step 3: Create schema for our database
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// Creating new Schema for person
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Step 4: Use this created schema to create mongoose model -> mongoose.model("Collection Name in singular (string)", SchemaName);
// Automatically mongodb convert this Fruit collection to plural name as fruits
const Fruit = mongoose.model("Fruit", fruitSchema);

// Creating new model for person schema
const Person = mongoose.model("Person", personSchema);

// Step 5: Create document inside the collection using the model
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit",
});

const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "Awesome",
});

const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "good",
});

// Insert Many inside a collection using model
Fruit.insertMany([banana, orange]);

const person = new Person({
  name: "John Doe",
  age: 37,
});

const arun = new Person({
  name: "Arun Kumar",
  age: 21,
});

// Step 6: Now save the fruit document into Fruit collection
// fruit.save();
person.save();
arun.save();
