const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* Middlewares */
app.use(helmet());
app.use(morgan("dev"));

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(s=>s.trim())
  : '*';

app.use(cors({
  origin: allowedOrigins,
  credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* Health route */
app.get('/health',(req,res)=>{
  res.status(200).json({
    success:true,
    message:'ok',
    time:new Date().toISOString()
  })
});

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
  console.log(`Server running on ${PORT}`);
});
