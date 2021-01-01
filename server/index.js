// const express= require('express')
// const bodyParser =require('body-parser')
// const mongoose = require('mongoose')
// const cors = require("cors")
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv  from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js'

const app=express();

// middleware

app.use('/posts',postRoutes)


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());



const PORT=process.env.PORT || 5000;

// DB CONNECTION

// const MONGODB_URI='mongodb+srv://dbUser:T7DfnLPxIWY94dOh@cluster0.lwnah.mongodb.net/test'

mongoose.connect(process.env.MONGODB_URI,{
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false)

