const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Working");
});
app.post("/test", (req, res) => {
    console.log(req.body.name);
    res.send(req.body);
});
app.listen(5500, () => {
    console.log("Server Started listening");
});
