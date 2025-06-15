import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //const today = new Date("June 24,2025 11:13:00");
    const today = new Date();
    const day = today.getDay();

    //console.log(day);
    let type = "a weekday";
    let adv = "work hard";

    if (day === 0 || day === 6){
        type = "the weekend";
        adv = "work even harder";
    }
    res.render("index.ejs", {
        dayType: type, 
        advice: adv,});
});

app.listen(port, () => {
   console.log(`server running on port ${port}.`) 
});