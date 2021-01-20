const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://goyo:12345@cluster0.2dklw.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() =>console.log("Base de datos conectada"))
  .catch(err => console.error(err));


const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});