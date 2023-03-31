require('dotenv').config;
const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')
const cors = require('cors')

const router = require('./routes/index')
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.use("/rickandmorty",router)

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`)
})