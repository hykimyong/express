import * as express from "express";

const app: express.Express = express();

const port: number = 3000;

app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "kim nak yong", age: 99, friends: ["ss", "ys", "ye"] });
});

app.post("/test", (req, res) => {
  res.send({ person: "kim" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
