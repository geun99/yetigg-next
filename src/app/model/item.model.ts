import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  id: string;
  name: string;
  img: string;
  inform: string[];
  detail: string[];
  drop: string[];
}

const itemSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  inform: {
    type: [String],
    required: true,
  },
  detail: {
    type: [String],
    required: true,
  },
  drop: {
    type: [String],
    required: true,
  },
});

const Item = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);

export default Item;
