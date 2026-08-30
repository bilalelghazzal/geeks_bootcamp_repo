const mongose= require('mongose');

const userSchema=new mongose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true}
});

const User=mongoose.Schema.model('User',userSchema); // here we create the model

const postSchema=new mongose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{
        type:mongose.Schema.Types.ObjectID,
        ref:"User",
        required:true // refrence to the user model
    },
    comments:[
        {
            text:String,
            author:{
                type:mongose.Schema.Types.ObjectID,
                ref:'User',
            },
            createdAt:Date.now(),
        }
    ]
})

const Post=mongose.model('Post',postSchema);

// create user before link them to post 
const Users=async()=>{
    const user=await User.create({username:'lina',email:'lina@gmail.com'});
    const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

    await Post.create({
        title: "MongoDB Relationships",
        content: "Today we learned about population...",
        author: lina._id, // Reference to Lina
        comments: [
          { text: "Great post!", author: adam._id } // Comment by Adam
        ]
    })
}

const getFullBlogFeed = async () => {
    const feed = await Post.find()
      .populate('author', 'username') // Populates the Post author
      .populate('comments.author', 'username'); // Deep populates the Comment authors
      
    console.log(JSON.stringify(feed, null, 2));
  };
  