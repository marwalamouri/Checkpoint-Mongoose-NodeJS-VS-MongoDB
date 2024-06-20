import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Person from "./model/person.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

await mongoose.connect(process.env.MONGO_URI);

// Create and Save a Record of a Model:
// const person = new Person({
//   name: "marwa",
//   age: 28,
//   favouriteFoods: ["Pizza"],
// });

// person
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("error"));

//Create Many Records with model.create()
// async function start() {
//   const data = [
//     { name: "Ahmed", age: "25", favouriteFoods: ["Pasta", "Pizza"] },
//     { name: "Mohamed", age: 22, favouriteFoods: ["Hamberger"] },
//     { name: "Mariam", age: 30, favouriteFoods: ["Couscous"] },
//   ];
//   const persons = await Person.create(data);
//   console.log(persons);
// }
// start();

//Use model.find() to Search Your Database
// async function start() {
//   const person = await Person.find({ name: "marwa" });
//   console.log(person);
// }
// start();

//Use model.findOne()
// async function start() {
//   const person = await Person.findOne({ favouriteFoods: "Couscous" });
//   console.log(person);
// }
// start();

//Use model.findById()
// async function start() {
//   const person = await Person.findById({ _id: "66738a337c0643e231a485f3" });
//   console.log(person);
// }
// start();

//Using model.findOneAndUpdate()
// async function start() {
//   const person = await Person.findOneAndUpdate(
//     { name: "marwa" },
//     { age: 20 },
//     { new: true }
//   );

//   console.log(person);
// }
// start();

// Using model.findByIdAndRemove //this function do not exist
// async function start() {
//   await Person.findByIdAndDelete("66738861b4980b579d1106c9");
// }
// start();
