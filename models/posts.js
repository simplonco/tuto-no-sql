const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    registered_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
