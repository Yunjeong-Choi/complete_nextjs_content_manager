import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default function Resources(req: NextApiRequest, res: NextApiResponse) {
  res.send(data);
}
