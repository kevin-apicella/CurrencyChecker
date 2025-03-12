import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;
const API_URL = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  