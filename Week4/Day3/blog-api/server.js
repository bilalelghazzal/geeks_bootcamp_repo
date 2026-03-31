// please install run ( npm init - y and npm install express )
// i delete it by mistake ; 


const express = require('express');
const app = express();

// very important line : enableing request at body 
app.use(express.json());


let posts = [
    { id: 1, title: 'First Post', content: 'Hello World!' },
    { id: 2, title: 'Second Post', content: 'This is another post.' }
];
let nextId = 3;

// GET 
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id  
app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
        //return res.status(404).send("product not found ");
    }
    res.json(post);
});

// POST /posts: Create new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newPost = { id: nextId++, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id: Update a post
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    // Extracts the title and content fields from the request body
    // Only updates fields that are present in the request body.
    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    res.json(post);
});

// DELETE 
app.delete('/posts/:id', (req, res) => {
    // find id 
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    const deletedPost = posts.splice(index, 1)[0];
    res.json(deletedPost);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Blog API server is running on port ${PORT}`);
});