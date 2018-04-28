const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://shafeeque:youtube123@ds261929.mlab.com:61929/youtube-playlist";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error", +err);
    }
});
router.get('/', function(req, res){
    res.send('api works');
});
module.exports = router;