import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFuncs } from "../../../utils/types";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   //capture request method, we type it as a key of ResponseFunc to reduce typing later
//   const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

//   //function for catch errors
//   const catcher = (error: Error) => res.status(400).json({ error })

//   // GRAB ID FROM req.query (where next stores params)
//   const id: string = req.query.id as string
//   console.log(id)

//   // Potential Responses for /todos/:id
//   const handleCase: ResponseFuncs = {
//     // RESPONSE FOR GET REQUESTS
//     GET: async (req: NextApiRequest, res: NextApiResponse) => {
//       const { Tags } = await connect() // connect to database
//       res.json(await Tags.findOne().where({ id: id }).catch(catcher))
//     },
//   }

//   // Check if there is a response for the particular method, if so invoke it, if not response with an error
//   const response = handleCase[method]
//   if (response) response(req, res)
//   else res.status(400).json({ error: "No Response for This Request" })
// }

// export default handler
