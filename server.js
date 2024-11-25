const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


// import routers
const userRoutes = require('./router/userRoutes');
const candidateRouts = require('./router/candidateRouts');


// use routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRouts);






app.listen(PORT, () => {
    console.log("server is connected on 3000");
})


