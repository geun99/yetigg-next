import { connectDB } from "@/app/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const db = (await connectDB).db("yetigg");
      let result = await db.collection("monster").find().toArray();
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json("오류");
    }
  }
}
