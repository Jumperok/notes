import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  executor: String,
  text: String,
  status: String
});

export default mongoose.model('Note', Schema);
