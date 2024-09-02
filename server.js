require('dotenv').config();
const express = require('express')
const app = require('./app')


//middleware
app.use(express.json())
//testing
app.get('/',(req,res)=>{
    res.json({message: 'hello from api'})
})

//port
const PORT = process.env.PORT;

//server
app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})