const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(4000, () => console.log(`Server is listening on 4000`));