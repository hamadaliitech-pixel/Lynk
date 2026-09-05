const express = require('express');
const multer = require('multer')
const cors = require('cors')

const postmodel = require('./model/model');
const Uploadfile = require('./services/services');

const app = express();
app.use(cors());
app.use(express.json()); 

const upload = multer({
    storage: multer.memoryStorage()
})

app.post('/Lynk_it', upload.single("image"), async (req,res)=>{
    // console.log(req.body);
    // console.log(req.file);

    const result = await Uploadfile(req.file.buffer);
    // console.log(result)

    const user_info = new postmodel({
        url:req.body.url,
        title:req.body.title || "Untitled",
        profile_pic:result.url || ""
    })

    console.log(user_info);

    await user_info.save();

    return res.status(200).json({
        message:"posted successfully",
        user_info,
    })
})

app.get('/get_lynk', async (req,res)=>{
    const user_info = await postmodel.find();

    return res.status(200).json({
        message:"data fetched successfully",
        user_info,
    })
})

module.exports = app