const express = require('express');
const bodyParser = require("body-parser");
const studentRouter = require('./routes/studentRoute')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/students',studentRouter)

app.get('/',(req,res)=>{
  res.send("hello world");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});