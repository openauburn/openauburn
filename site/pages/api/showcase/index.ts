import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      // Fetch data-access
      let data_access_resp = await fetch(
        process.env.DATA_ACCESS_URL + "/showcase"
      );
      let showcase = (await data_access_resp.json()).data;
      res.json(showcase);
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) {
    console.log("response");
    return response(req, res);
  } else {
    console.log("else");
    res.status(400).json({ error: "No Response for This Request" });
  }
};

export default handler;
