const express = require("express");
const app = express();
const videoroutes = require("./routes/VideoRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(require("cors")());
app.use(express.static('public'))

app.use("/videos", videoroutes);


app.listen(8080, () => console.log("The server is now listening on port 8080"));
