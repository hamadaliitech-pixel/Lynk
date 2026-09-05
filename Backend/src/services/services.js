const {ImageKit} = require('@imagekit/nodejs');
const dotenv = require('dotenv');
require('dotenv').config();
const imagekitInstance = new ImageKit({
  privateKey: process.env.imagekitkey,
});

async function Uploadfile(file) {
//   console.log(file);

  const result = await imagekitInstance.files.upload({
    file: file.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}

module.exports = Uploadfile