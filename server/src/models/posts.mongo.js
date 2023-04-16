const mongoose = require('mongoose');
//const slug = require('mongoose-slug-generator');

//mongoose.plugin(slug);

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
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
  tags: [String],
  comments: [
    {
      name: String,
      email: String,
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    slug: 'title',
    unique: true,
  },
});

module.exports = mongoose.model('Post', postsSchema);
