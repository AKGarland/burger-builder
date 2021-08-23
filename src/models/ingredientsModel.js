import { Schema, model } from 'mongoose';

const toppingsSubSchema = new Schema({
  id: Number,
  imgSrc: String,
  name: String,
  description: String,
  type: String
});

const extrasSubSchema = new Schema({
  id: Number,
  imgSrc: String,
  name: String,
  description: String,
  type: String,
  price: Number
});

const ingredientsModel = new Schema({
  toppings: [toppingsSubSchema],
  base: Object,
  protein: Object,
  extras: [extrasSubSchema]
});

const Ingredients = model('Ingredients', ingredientsModel);
export default Ingredients;