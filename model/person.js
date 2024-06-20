import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favouriteFoods: [String],
});

export default mongoose.model("Person", personSchema);
