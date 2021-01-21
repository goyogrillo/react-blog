const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require('./config/key');
mongoose.connect(config.mongoURI, {useNewUrlParser: true})
  .then(() =>console.log("Base de datos conectada"))
  .catch(err => console.error(err));

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { User } = require('./models/User');

const port = process.env.PORT || 5000;

// para no recibir ninguna advertencia o error de desaprobación
// admite el análisis de los datos de la publicación application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req,res) => {
  const user = new User(req.body)

  user.save((err, useData) =>{
    if(err) return res.json ({ success: false,err })
  })
  return res.status(200).json({
    sucess:true
  });
})
app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});