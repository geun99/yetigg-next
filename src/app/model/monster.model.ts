import mongoose, { Document, Schema } from "mongoose";

export interface IMonster extends Document {
  id: number;
  meso: number;
  name: string;
  level: number;
  exp: number;
  hp: number;
  mp: number;
  continent: string;
  img: string;
  move: string;
  location: string[];
  feature: string[];
  drop: string[];
}

const monsterSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  meso: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  mp: {
    type: Number,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  move: {
    type: String,
    required: true,
  },
  location: {
    type: [String],
    required: true,
  },
  feature: {
    type: [String],
    required: true,
  },
  drop: {
    type: [Number],
    required: true,
  },
});

const Monster = mongoose.model<IMonster>("Monster", monsterSchema);

export default Monster;
