const mongoose = require('mongoose');
const validator = require('validator');

const profile_schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      default: ''
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      default: ''
      
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      default: '',
      validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false
      }
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: ''
    },
    password: {
      type: String,
      required: true,
      trim: true,
      default: ''
    },
    active:{
      type: Boolean
    },
    photo:{
      type:String,
      required: false
    },
    join_date: {
      type: Date,
      default: Date.now
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    location:{
      type: String
    }
  }
);




module.exports = mongoose.model('profile', profile_schema);
