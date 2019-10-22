const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;
const following_schema = mongoose.Schema(
  {
    follower_id: {
      type: ObjectId,
      required: true
    },
    followed_id: {
      type: ObjectId,
      required: true
    }
  });

module.exports = mongoose.model('following', following_schema);
