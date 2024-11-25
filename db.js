const mongoose = require('mongoose');
require('dotenv').config();

// define URL

const mongourl = 'mongodb://localhost:27017/voters';
// const mongourl ='mongodb+srv://vaibhavpan31:vaibhav123@cluster0.oj8ep.mongodb.net/';
// const mongourl = process.env.MONGODB_URL

// connect to MongoDB
mongoose.connect(mongourl);

// define schema for hotel collection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connectted to monggo db');
})
db.on('error', (err) => {
    console.log('Error in connecting to mongo db' + err);
})

db.on('disconncted', () => {
    console.log('Disconnected from mongo db');
})
// export the databases 
module.exports = db;
