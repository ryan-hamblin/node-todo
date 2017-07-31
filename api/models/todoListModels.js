const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: {
    type: String,
    Required: 'Todo needs a name',
  },
  Created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed'],
    }],
    default: ['pending'],
  },
});

module.exports = mongoose.model('Todos', TodoSchema);