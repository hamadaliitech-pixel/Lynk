const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
    url:String,
    title:String,
    profile_pic:String,
})

const postmodel = mongoose.model('user_info',postschema);

module.exports = postmodel;