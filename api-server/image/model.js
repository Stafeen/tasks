const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var uploadSchema = new Schema(
  {
    imagename:{ 
    type: String,
    default: "none",
    required: true
    }
 
    



  });



  var uploadModel = mongoose.model('image', uploadSchema);
  module.exports=uploadModel;
