import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { WargamingService } from "@/services/wargaming/wargaming.service";

const InputQuerySchema = z.object({
  search: z.string(),
});

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = InputQuerySchema.parse(req.query);

  const clans = await WargamingService.searchClans(search);

  res.json(clans);
};

export default search;
