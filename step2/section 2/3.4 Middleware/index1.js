import express from "express";
//the middle ware import
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// express execution / port
const app = express();
const port = 3000;

// the middleware
app.use(bodyParser.urlencoded({extended: true}));

// to send back the index html resource
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// to collect the form data and send the resource using the middle ware
app.post("/submit",(req, res) =>{
    console.log(req.body);
});

// to listen for the express port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
