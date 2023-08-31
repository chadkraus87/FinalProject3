const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
   name: {
    type: String,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reviewReply: [
    { 
      adminId: 
      { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
      },
      text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    }
  ]
});

const Review = model('Review', reviewSchema);

module.exports = Review;
