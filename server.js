const express = require('express');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/UserRoute.js');
app.use('/api/users', router);


const port = process.env.PORT || 8080;

app.listen(port , ()=>{
    console.log("server is running");
})