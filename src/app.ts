import * as express from "express";
import { Cat } from "./app.model";

const app: express.Express = express();

// loggin middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

// READ 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
    });
  }
});

//특정 고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
    });
  }
});

//* json middleware
app.use(express.json());

//* CREATE 새로운 고양이 추가 API
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); //create
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).send({
      success: false,
    });
  }
});

//404 middleware
app.use((req, res, next) => {
  console.log("this is logging middleware");
  res.send({ error: "404 not found" });
});

app.listen(8000, () => {
  console.log("Server is on..");
});
