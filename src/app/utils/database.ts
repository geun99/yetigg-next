import { MongoClient } from "mongodb";

const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(
      process.env.MONGODB_URI!,
      options
    ).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(process.env.MONGODB_URI!, options).connect();
}

export { connectDB };
