import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  key: Number;
  name?: String;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { key } = req.query,
    response = { key, name: "name" };

  if (!response) {
  }
  res.status(200).json(response);
}
