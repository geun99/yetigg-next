import { connectDB } from "@/app/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { name } = req.query;
      const db = (await connectDB).db("yetigg");

      const results = await db
        .collection("items")
        .find({ name: { $regex: name as string, $options: "i" } })
        .toArray();

      if (!results || results.length === 0) {
        return res.status(404).json({ error: "Items not found" });
      }

      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the items data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
