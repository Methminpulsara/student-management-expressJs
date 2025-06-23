const express = require('express');
const bodyParser = require("body-parser");
const studentRoute = require("./routes/studentRoute");
require('dotenv').config();
const cors = require('cors');

const app = express()
app.use(cors());
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use('/students', studentRoute);

app.get('/',(req, res) => {
    req.send("hello")
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});