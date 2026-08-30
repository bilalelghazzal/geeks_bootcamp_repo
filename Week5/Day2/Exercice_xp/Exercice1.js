const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Post = mongoose.model('Post', postSchema);

// Practical Test
const run = async () => {
  const admin = await User.create({ name: 'Lina' });
  await Post.create({ title: 'Mongoose is Awesome', author: admin._id });

  // The Magic Part
  const postWithData = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');
  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`); // Accessing name via population
};


