const mongoose = require('mongoose');
const validator = require('validator');

const recommendation_schema = mongoose.Schema(
  {
    recommendationText: {
      type: String,
      required: true,
      trim: true,
      default: ''
    },
    author: {
      type: String,
      required: true,
      trim: true,
      default: ''
      
    },
    receiver: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      default: '',
    },
    date: {
      type: Date,
      required: true,
      unique: true,
      default: Date.now
    },
    updateDate: {
      type: Date,
      required: false,
      unique: true,
      default: Date.now
    }
  }
);




module.exports = mongoose.model('recommendations', recommendation_schema);
