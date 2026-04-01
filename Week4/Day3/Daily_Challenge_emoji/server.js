const express = require('express');//
const app = express();
app.use(express.json());
app.use(express.static('public')); 

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' }
];

let gameState = { score: 0, leaderboard: [] };

//  get a new question
app.get('/next-question', (req, res) => {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];
    
    const distractors = emojis
        .filter(e => e.name !== correct.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    const options = [correct.name, ...distractors.map(d => d.name)].sort();
    
    res.json({ emoji: correct.emoji, options });
});

//  check the answer
app.post('/guess', (req, res) => {
    const { guess, emojiChar } = req.body;
    const actual = emojis.find(e => e.emoji === emojiChar);

    if (actual && actual.name === guess) {
        gameState.score++;
        return res.json({ correct: true, score: gameState.score });
    }
    res.json({ correct: false, score: gameState.score });
});

app.listen(3000, () => console.log('Game running on http://localhost:3000'));