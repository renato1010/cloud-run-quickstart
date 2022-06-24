import { Request, Response, Router } from "express";
import type { User, UserGetResponse, UserPostBody } from "./users.types";

const userRouter = Router();

// dummy data
const users: User[] = [
  { name: "Renato", age: 45 },
  { name: "Lionel", age: 35 },
  { name: "Luka", age: 36 },
];

// get all users
userRouter.get("/", (_: Request, res: Response): Response<UserGetResponse> => {
  return res.status(200).json({ data: users });
});
userRouter.post("/", (req: Request, res: Response) => {
  const body: UserPostBody = req.body;
  return res.json({ data: body, ok: true });
});

export { userRouter };
