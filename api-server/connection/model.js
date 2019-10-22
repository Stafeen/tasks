const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const connection_schema = mongoose.Schema(
  {
    user1_id: ObjectId,
    user2_id: ObjectId ,
    accept1: Boolean,
    accept2: Boolean,
    story:String,
    date: {
      type: Date,
      default: Date.now
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
    



  });

module.exports = mongoose.model('connections', connection_schema);
