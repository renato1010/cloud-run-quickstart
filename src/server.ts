import express, { Application, Request, Response } from "express";
import { userRouter } from "./users/user.router";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).json({ data: { message: "Hello World" }, ok: true });
});
app.use("/users", userRouter);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  }
  console.error("Error starting server");
}
