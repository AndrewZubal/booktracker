const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, enum: ['Read', 'Want to Read', 'Currently Reading'], required: true },
  rating: { type: Number, min: 1, max: 5 },
  review: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Book', bookSchema);
