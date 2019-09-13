const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//DB connection
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to DB'));

//Middlewares
app.use(express.json());

//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);


app.listen(3000, () => console.log("server up and running"));


