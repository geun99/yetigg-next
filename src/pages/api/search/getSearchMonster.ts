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
        .collection("monster")
        .find({ name: { $regex: name, $options: "i" } })
        .toArray();

      if (!results || results.length === 0) {
        return res.status(404).json({ error: "Monsters not found" });
      }

      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the monster data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
