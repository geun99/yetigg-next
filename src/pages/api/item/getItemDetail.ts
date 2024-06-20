import { connectDB } from "@/app/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const db = (await connectDB).db("yetigg");

      let result = await db
        .collection("items")
        .findOne({ id: parseInt(id as string) });

      if (!result) {
        return res.status(404).json({ error: "Item not found" });
      }

      res.status(200).json(result);
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
