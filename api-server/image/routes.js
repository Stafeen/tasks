var express = require('express');
var multer = require('multer');
var path = require('path');
var jwt = require('jsonwebtoken');
var uploadModel = require('./model');
var router = express.Router();
var imageData =uploadModel.find({});

//router.use((req,res,next)=>{console.log("/image");next()});
router.use(express.static(__dirname+"../public/"));

var Storage= multer.diskStorage({
    destination:"../public/uploads/",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  var upload = multer({
    storage:Storage
  }).single('file');
  /* GET home page. */
  router.post('/upload', upload,function(req, res, next) {
  
   var imageFile=req.body.filename;
   var success =req.body.filename+ " uploaded successfully";
  
   var imageDetails= new uploadModel({
    imagename:imageFile
   
   })

  
    imageDetails.save(function(err,doc){
if(err) throw err;
   });
   
imageData.exec(function(err,data){
    if(err) throw err;
    res.render('../profile', { records:data,   success:success });
    })
  });
    
    
    
      



  
module.exports = router;