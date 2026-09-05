const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();
async function connectDB() {
    await mongoose.connect(process.env.database_url)
    console.log('database is connected');
}

module.exports = connectDB;