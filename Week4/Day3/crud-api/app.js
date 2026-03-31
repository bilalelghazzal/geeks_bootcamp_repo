const express = require('express');
// import dataservice
const dataService = require('./data/dataservice');

const app = express();
// GET
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`CRUD API server is running on port ${PORT}`);
});


