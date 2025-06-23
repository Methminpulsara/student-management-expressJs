require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const studentRoute = require("./routes/studentRoute");

const port = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.json());
app.use("/students", studentRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})