const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
//app
const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//routes middleware
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);
//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
