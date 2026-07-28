//Create the Express Server
const express = require('express');
// enable json middleware
const app=new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import the  routes
const route= require('./routes/menuRoutes.js');
// mount the routes 
app.use('/api/',route);

//starrt the server
const port=3000;
app.listen(port,()=>{
    console.log('servr is running on port',port);
    //base url for the api
    console.log(`http://localhost:${port}/api`);
} );


/*
 http://localhost:3000/api/menu
 http://localhost:3000/api/menu/name
 http://localhost:3000/api/menu
 http://localhost:3000/api/menu/:id
 http://localhost:3000/api/menu/:id
 */
