require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect("mongodb+srv://quickshare:quickshare@cluster0.qdu5j.mongodb.net/quickshare", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected')
    })
    .catch(err => {
        console.log('Connection failed')
    });
}


module.exports = connectDB;