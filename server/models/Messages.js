const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messageReply: [{
    adminId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    date: { type: Date, default: Date.now }
  }]
});

const Message =  model('Message', messageSchema);

module.exports = Message;
