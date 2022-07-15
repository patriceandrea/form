const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();
const userRouter = require('./routes/users');
const pool = require("./db");
const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', userRouter(pool));

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));