// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  action: string;
  data: any;
};

import axios from "axios";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { body } = req;

  res.status(200).json({ action: "create", data: body });
}
