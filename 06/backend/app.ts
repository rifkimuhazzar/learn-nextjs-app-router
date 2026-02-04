import express, { type Request, type Response } from "express";

const app = express();

app.get("/messages", (req: Request, res: Response) => {
  const requestSource = req.headers["x-id"];
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`,
  );

  res.json([
    { id: 1, text: "Hello World" },
    { id: 2, text: "Another message from the separate backend" },
  ]);
});

app.listen(8080);
