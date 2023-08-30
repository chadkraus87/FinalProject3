const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  }
});

module.exports = mongoose.model('Task', taskSchema);
