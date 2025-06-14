import express from "express";
//the middle ware import
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

// the middleware
app.use(bodyParser.urlencoded({extended: true}));

// to generate the band name
function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

// to send back the index html resource
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// the form result
app.post("/submit",(req, res) =>{   
    res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
